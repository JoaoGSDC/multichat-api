import { Request, Response } from "express";
import { GetChatsAndUsersUseCase } from "./GetChatsAndUsersUseCase";

export class GetChatsAndUsersController {
  async handle(req: Request, res: Response) {
    const { room } = req.body;

    const getChatsAndUsersUseCase = new GetChatsAndUsersUseCase();
    const result = await getChatsAndUsersUseCase.execute({ room });

    return res.status(201).json(result);
  }
}
