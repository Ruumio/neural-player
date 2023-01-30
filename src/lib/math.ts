import type { Vector } from "./types";

export function vecLength(vec: Vector) {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

export function vecMultiply(vec: Vector, scalar: Vector | number) {
  if (typeof scalar === "number") {
    return {
      x: vec.x * scalar,
      y: vec.y * scalar
    }
  } else {
    return {
      x: vec.x * scalar.x,
      y: vec.y * scalar.y
    }
  }
}
