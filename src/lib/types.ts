export type Vector = {
  x: number
  y: number
}

export type VectorTime = Vector & {
  time: number
}

export type PlayerPosition = {
  id: string
  positions: Vector[]
}

export type MsgTypes = {
  playerPosition: VectorTime
  playerDisconnect: string
}
