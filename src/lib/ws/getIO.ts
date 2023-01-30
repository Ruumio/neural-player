import type { Server } from "socket.io";

declare global {
  var io: Server;
}

export async function getIO() {
  return new Promise<Server>((resolve, reject) => {
    if (global["io"]) return resolve(global.io);
    let i = 0;
    const int = setInterval(() => {
      i++;
      if (global.io) return resolve(global.io);
      if (i > 10) {
        reject("Could not get io");
        clearInterval(int);
      }
    }, 100)
  })
}
