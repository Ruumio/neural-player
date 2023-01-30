import type { VectorTime } from "$lib/types";
import { PrismaClient, type User } from "@prisma/client";

const d = await import("$lib/ws/getIO")
const ws = await d.getIO()

const db = new PrismaClient();

let positions: Record<string, VectorTime[]> = {};
let timeout: NodeJS.Timeout | null = null;
async function savePlayerPosition(id: string, pos: VectorTime) {

  if (!positions[id]) {
    positions[id] = []
  }
  positions[id].push(pos)

  if (!timeout) {
    timeout = setTimeout(async () => {

      const dataToWrite = positions
      positions = {}

      const playerIds = Object.keys(dataToWrite);
      const points = [];

      const users: Record<string, User> = {};
      for (const id of playerIds) {
        const u = await db.user.findFirst({
          where: { socketId: id },
        })
        users[id] = u || await db.user.create({
          data: {
            socketId: id,
          }
        })
      }

      for (const id of playerIds) {
        for (const pos of dataToWrite[id]) {
          points.push({
            playerId: id,
            time: pos.time,
            x: pos.x,
            y: pos.y,
          })
        }
      }

      for (const point of points) {
        await db.dataPoint.create({
          data: {
            user: { connect: { id: users[point.playerId].id } },
            time: new Date(point.time),
            x: point.x,
            y: point.y,
          }
        })
      }

      timeout = null;
    }, 1000);
  }

}

ws.on("connect", (socket) => {
  socket.on("playerPosition", (data) => {
    // savePlayerPosition(socket.id, data)
  })
})

export { };

