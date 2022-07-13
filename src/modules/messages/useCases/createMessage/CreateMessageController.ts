import { Request, Response } from "express";
import { CreateMessageUseCase } from "./CreateMessageUseCase";

export class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { msg, userId, chatId } = req.body;

    const createMessageUseCase = new CreateMessageUseCase();

    const result = await createMessageUseCase.execute({
      msg,
      userId,
      chatId,
    });

    return res.status(201).json(result);
  }
}
