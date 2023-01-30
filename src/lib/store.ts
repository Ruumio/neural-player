import { writable } from 'svelte/store';
import type { Vector } from './types';
export const ownPosition = writable({ x: 0, y: 0 });
export const playersPositions = writable<Record<string, Vector[]>>({});

export function addPlayerPositions(p: Record<string, Vector[]>) {
  playersPositions.update((positions) => {
    const playerIds = Object.keys(p);
    for (const id of playerIds) {
      if (!positions[id]) {
        positions[id] = [];
      }
      positions[id].push(...p[id]);
      positions[id] = positions[id].slice(-11);
    }
    return p;
  })
}

export function addPlayerPosition(id: string, pos: Vector) {
  if (!id) return;
  playersPositions.update((p) => {
    if (!p[id]) {
      p[id] = [];
    }
    p[id].push({ ...pos });
    p[id] = p[id].slice(-11);
    return p;
  });
}
