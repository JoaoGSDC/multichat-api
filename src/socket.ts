import { Server } from "socket.io";
import http from "http";

export function socket(server: http.Server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("JOIN_ROOM", (data) => {
      socket.join(data);
      console.log(
        `[IO] JOIN ROOM => User with ID: ${socket.id} joined room: ${data}`
      );
    });

    socket.on("CHAT_MESSAGE", (data) => {
      console.log("[IO] CHAT_MESSAGE => ", data);
      io.emit("CHAT_MESSAGE", data);
    });

    socket.on("ROOMS", (data) => {
      console.log("[IO] ROOMS => ", data);
      io.emit("ROOMS", data);
    });

    socket.on("DISCONNECT", () => {
      console.log("[IO] DISCONNECT => User Disconnected", socket.id);
    });
  });
}
