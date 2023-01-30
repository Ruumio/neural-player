<script lang="ts">
	import { onMount } from 'svelte';
	import { addPlayerPosition, ownPosition, playersPositions } from '$lib/store';
	import * as socket from '$lib/ws/client';
	import { LayersModel, loadLayersModel, tensor2d } from '@tensorflow/tfjs';
	import { vecLength, vecMultiply } from '$lib/math';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;

	let width = 1000;
	let height = 1000;
	let windowWidth = 100;
	let windowHeight = 100;

	let direction = {
		x: 0,
		y: 0
	};

	let speed = {
		x: 0,
		y: 0
	};

	let predictionResult: number[];

	let model: LayersModel;
	async function loadModel() {
		model = await loadLayersModel('/model-lstm/model.json');
	}
	async function predict(input: number[][]) {
		if (input.length !== 10) return;
		const inputData = tensor2d(input).reshape([1, 10, 2]);
		const result = model.predict(inputData);

		const res = Array.isArray(result) ? result[0] : result;

		return res.data();
	}

	function update() {
		speed.x += direction.x;
		speed.y += direction.y;

		let length = vecLength(speed);
		if (length > 9) {
			speed = vecMultiply(speed, 9 / length);
		}

		speed.x += speed.x > 0 ? -0.1 : 0.1;
		speed.y += speed.y > 0 ? -0.1 : 0.1;

		speed.x = speed.x * 0.99;
		speed.y = speed.y * 0.99;

		$ownPosition.x += speed.x;
		$ownPosition.y += speed.y;
		$ownPosition.x = Math.max(0, Math.min(width - 10, $ownPosition.x));
		$ownPosition.y = Math.max(0, Math.min(height - 10, $ownPosition.y));
	}

	$: playerIds = Object.keys($playersPositions);

	function draw() {
		if (!ctx) return;
		requestAnimationFrame(draw);
		update();
		ctx.clearRect(0, 0, width, height);

		ctx.fillStyle = 'gray';
		for (let index = 0; index < playerIds.length; index++) {
			const playerId = playerIds[index];
			const positions = $playersPositions[playerId];
			for (const pos of positions) {
				ctx.fillRect(pos.x, pos.y, 10, 10);
			}
		}

		if (predictionResult) {
			console.log(predictionResult);
			ctx.fillStyle = 'black';
			ctx.fillRect(
				$ownPosition.x - (predictionResult[1] + 0.5) * 100,
				$ownPosition.y - predictionResult[0] * 100,
				10,
				10
			);
		}

		ctx.fillStyle = 'red';
		ctx.fillRect($ownPosition.x, $ownPosition.y, 10, 10);
	}

	function handleResize() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	}

	function handleKeyup(ev: KeyboardEvent) {
		if (ev.key === 'ArrowUp') {
			direction.y = 0;
		}

		if (ev.key === 'ArrowDown') {
			direction.y = 0;
		}

		if (ev.key === 'ArrowLeft') {
			direction.x = 0;
		}

		if (ev.key === 'ArrowRight') {
			direction.x = 0;
		}
	}

	function handleKeydown(ev: KeyboardEvent) {
		if (ev.key === 'ArrowUp') {
			direction.y += -0.5;
		}

		if (ev.key === 'ArrowDown') {
			direction.y += 0.5;
		}

		if (ev.key === 'ArrowLeft') {
			direction.x += -0.5;
		}

		if (ev.key === 'ArrowRight') {
			direction.x += 0.5;
		}

		direction.x = Math.max(-5, Math.min(5, direction.x));
		direction.y = Math.max(-5, Math.min(5, direction.y));
	}

	let mouseDown = false;
	let mouseDownVec = { x: 0, y: 0 };
	function handleMouseOut() {
		if (mouseDown) direction = { x: 0, y: 0 };
	}

	function handleMouseMove(ev: MouseEvent) {
		if (!mouseDown) return;
		let vec = {
			x: ev.clientX - mouseDownVec.x,
			y: ev.clientY - mouseDownVec.y
		};

		direction.x = Math.max(-5, Math.min(5, vec.x / (windowWidth / 2)));
		direction.y = Math.max(-5, Math.min(5, vec.y / (windowHeight / 2)));
	}

	function handleMouseUp() {
		mouseDown = false;
		direction = { x: 0, y: 0 };
	}

	function handleMouseDown(ev: MouseEvent) {
		mouseDown = true;
		mouseDownVec = { x: ev.clientX, y: ev.clientY };
	}
	const timeout = setInterval(async () => {
		addPlayerPosition(socket.getId(), $ownPosition);

		if (model) {
			const points = $playersPositions[socket.getId()];

			if (points) {
				const predictInput = points.map((p) => [p.x, p.y]).slice(-10);

				predict(predictInput).then((res) => {
					if (res) {
						predictionResult = [...res];
					}
				});
			}
		}

		socket.send('playerPosition', { ...$ownPosition, time: Date.now() });
	}, 200);

	onMount(async () => {
		ctx = canvas.getContext('2d');
		$ownPosition = { x: width / 2, y: height / 2 };
		draw();
		loadModel();

		handleResize();

		return () => {
			clearInterval(timeout);
		};
	});
</script>

<svelte:window
	on:resize={handleResize}
	on:keydown={handleKeydown}
	on:keyup={handleKeyup}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseOut}
	on:mouseup={handleMouseUp}
	on:mousedown={handleMouseDown}
/>

<canvas bind:this={canvas} {width} {height} />
{#if predictionResult}
	<p>
		{predictionResult[0]}, {predictionResult[1]}
	</p>
{/if}

<style global>
	:global(body) {
		margin: 0;
		display: grid;
		place-items: center;
		height: 100vh;
	}
	canvas {
		display: block;
		margin: 0 auto;
		outline: 1px solid black;
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}
</style>
