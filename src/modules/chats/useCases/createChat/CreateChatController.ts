import { Request, Response } from "express";
import { CreateChatUseCase } from "./CreateChatUseCase";

export class CreateChatController {
  async handle(req: Request, res: Response) {
    const { name, isPrivate, users } = req.body;

    const createChatUseCase = new CreateChatUseCase();

    const result = await createChatUseCase.execute({ name, isPrivate, users });

    return res.status(201).json(result);
  }
}
