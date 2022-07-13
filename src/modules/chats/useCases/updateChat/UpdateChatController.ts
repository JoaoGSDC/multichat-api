import { Request, Response } from "express";
import { UpdateChatUseCase } from "./UpdateChatUseCase";

export class UpdateChatController {
  async handle(req: Request, res: Response) {
    const { name, roomId, insertMembers, removeMembers } = req.body;

    const updateChatUseCase = new UpdateChatUseCase();
    const result = await updateChatUseCase.execute({
      name,
      roomId,
      insertMembers,
      removeMembers,
    });

    return res.status(201).json(result);
  }
}
