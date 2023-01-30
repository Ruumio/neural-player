import type { MsgTypes } from "$lib/types";
import ioClient from "socket.io-client";

let socket: ReturnType<typeof ioClient> | null = null;

function getSocket() {
  if (socket) return socket;
  socket = ioClient()
  socket.on("connect", () => {
    console.log("Connected to server")
  })
  return socket;
}

export function getId() {
  return getSocket().id || "me";
}

export async function send<T extends keyof MsgTypes>(msgType: T, data: MsgTypes[T]) {
  return getSocket().emit(msgType, data);
}

export async function on<T extends keyof MsgTypes>(msgType: T, cb: (data: MsgTypes[T]) => void) {
  return getSocket().on(msgType, function(data) {
    cb(data)
  });
}
