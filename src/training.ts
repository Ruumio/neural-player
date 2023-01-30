import { PrismaClient, type DataPoint } from "@prisma/client";
import * as tf from "@tensorflow/tfjs-node";

const db = new PrismaClient();

function pointsToArray(points: DataPoint[]) {

  const vectors = []

  for (let i = 1; i < points.length; i++) {
    vectors.push([(points[i - 1].x - points[i].x) / 1000, (points[i].y - points[i].y) / 1000]);
  }

  return vectors;

}

// function to format a duration as HH:MM:SS;
function formatDuration(duration: number): string {
  const d = Math.min(duration, 1000000000);
  return new Date(d * 1000).toISOString().substr(11, 8);
}
formatDuration(-1)

const AMOUNT_VEC = 5;
const EPOCH_SIZE = 100;

async function trainModel(playerMovements: number[][]): Promise<tf.Sequential> {
  // Convert the input data to a Tensor
  const movements = tf.tensor2d(playerMovements);

  // Define the model
  const model = tf.sequential();
  model.add(tf.layers.lstm({ units: 64, inputShape: [AMOUNT_VEC, 2] }));
  model.add(tf.layers.dense({ units: 2 }));

  // Compile the model
  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  const startTime = Date.now();

  // Train the model on the player movements data
  for (let i = AMOUNT_VEC; i < movements.shape[0]; i++) {
    const history = movements.slice([i - AMOUNT_VEC, 0], [AMOUNT_VEC, 2]).reshape([1, AMOUNT_VEC, 2]);
    const target = movements.slice([i, 0], [1, 2]);
    await model.fit(history, target, {
      epochs: EPOCH_SIZE,
      verbose: 0,
      callbacks: {
        onEpochEnd: (epoch, logs) => {

          const totalEpochs = movements.shape[0] - AMOUNT_VEC;
          const epochPercentage = epoch / EPOCH_SIZE;
          const percentage = (i - AMOUNT_VEC) / totalEpochs + epochPercentage / totalEpochs;
          const time = Date.now() - startTime;
          const timeLeft = (time / percentage) - time;

          console.log(`Total: (${Math.floor(percentage * 1000) / 10}%), Epoch ${epoch}: ${(epoch / 200 * 100).toFixed(2)}% complete`);
          console.log(`Time: ${formatDuration(time / 1000)}, Time left: ${formatDuration(timeLeft / 1000)}`);
        },
      },
    });
  }

  return model;
}

async function main() {

  const points = await db.dataPoint.findMany({
    take: 500
  })

  let model: tf.LayersModel | null = null;

  try {
    model = await tf.loadLayersModel("file://model-lstm/model.json");
  } catch {
    //TODO: Handle error
  }

  if (!model) {
    const pointsArr = pointsToArray(points);
    model = await trainModel(pointsArr)
  }

  await model.save("file://model-lstm");

  const playerMovements = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]];
  const last5Moves = playerMovements.slice(-AMOUNT_VEC);
  const nextMove = model.predict(tf.tensor2d(last5Moves).reshape([1, AMOUNT_VEC, 2])) as tf.Tensor;
  console.log("Next move:", nextMove.dataSync());
}

main()
