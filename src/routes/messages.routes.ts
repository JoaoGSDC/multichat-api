import { Router } from "express";
import { CreateMessageController } from "../modules/messages/useCases/createMessage/CreateMessageController";
import { GetMessagesByUserAndChatController } from "../modules/messages/useCases/getMessagesByUserAndChat/GetMessagesByUserAndChatController";
import { verifyJWT } from "../modules/token/VerifyToken";

const getMessagesByUserAndChatController =
  new GetMessagesByUserAndChatController();
const createMessageController = new CreateMessageController();

const messageRoutes = Router();

messageRoutes.get(
  "/:userId&:chatId",
  verifyJWT,
  getMessagesByUserAndChatController.handle
);
messageRoutes.post("/", verifyJWT, createMessageController.handle);

export { messageRoutes };
