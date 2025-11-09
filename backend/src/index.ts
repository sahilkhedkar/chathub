import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
const allSocket: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSocket.push(socket);
  console.log(`User connected`);
  socket.on("message", (message) => {
    for (let i = 0; i < allSocket.length; i++) {
      const s = allSocket[i];
      if (s) {
        s.send(message.toString() + " from server");
      }
    }
  });
});
