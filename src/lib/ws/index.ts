


export async function send<T extends keyof MsgTypes>(msgType: T, data: MsgTypes[T]) {
  console.log("Sending", { msgType, data });
}

export async function on<T extends keyof MsgTypes>(msgType: T, cb: (data: MsgTypes[T]) => () => void) {
  console.log("Listening", { msgType, cb });
}
