import { Request, Response } from "express";
import { DeleteChatsUseCase } from "./DeleteChatsUseCase";

export class DeleteChatsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteChatsUseCase = new DeleteChatsUseCase();
    const result = await deleteChatsUseCase.execute({ chatId: id });

    return res.status(201).json(result);
  }
}
