import express from "express";
import http from "http";
import cors from "cors";
import { routes } from "./routes";
import { socket } from "./socket";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
socket(server);

server.listen(3333, () => console.log("Server is running"));
