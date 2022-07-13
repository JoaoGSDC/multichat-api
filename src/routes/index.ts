import { Router } from "express";
import { chatRoutes } from "./chats.routes";
import { messageRoutes } from "./messages.routes";

import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/chats", chatRoutes);
routes.use("/users", userRoutes);
routes.use("/messages", messageRoutes);

export { routes };
