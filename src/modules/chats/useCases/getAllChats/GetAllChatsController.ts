import { Request, Response } from "express";
import { GetAllChatsUseCase } from "./GetAllChatsUseCase";

export class GetAllChatsController {
  async handle(req: Request, res: Response) {
    const { user } = req.body;

    const getAllChatsUseCase = new GetAllChatsUseCase();
    const result = await getAllChatsUseCase.execute({ user });

    return res.status(201).json(result);
  }
}
