import { Router } from "express";
import { CreateChatController } from "../modules/chats/useCases/createChat/CreateChatController";
import { DeleteChatsController } from "../modules/chats/useCases/deleteChat/DeleteChatsController";
import { GetAllChatsController } from "../modules/chats/useCases/getAllChats/GetAllChatsController";
import { GetChatsAndUsersController } from "../modules/chats/useCases/getChatsAndUsers/GetChatsAndUsersController";
import { UpdateChatController } from "../modules/chats/useCases/updateChat/UpdateChatController";
import { verifyJWT } from "../modules/token/VerifyToken";

const createChatController = new CreateChatController();
const getAllChatsController = new GetAllChatsController();
const getChatsAndUsersController = new GetChatsAndUsersController();
const updateChatController = new UpdateChatController();
const deleteChatsController = new DeleteChatsController();

const chatRoutes = Router();

chatRoutes.post("/", verifyJWT, createChatController.handle);
chatRoutes.post("/allByUser", verifyJWT, getAllChatsController.handle);
chatRoutes.post(
  "/getUsersWithChatName",
  verifyJWT,
  getChatsAndUsersController.handle
);
chatRoutes.put("/", verifyJWT, updateChatController.handle);
chatRoutes.delete("/:id", verifyJWT, deleteChatsController.handle);

export { chatRoutes };
