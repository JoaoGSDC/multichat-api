import { Request, Response } from "express";
import { GetMessagesByUserAndChatUseCase } from "./GetMessagesByUserAndChatUseCase";

export class GetMessagesByUserAndChatController {
  async handle(req: Request, res: Response) {
    const { chatId } = req.params;

    const getMessagesByUserAndChatUseCase =
      new GetMessagesByUserAndChatUseCase();

    const result = await getMessagesByUserAndChatUseCase.execute({
      chatId,
    });

    return res.status(201).json(result);
  }
}
