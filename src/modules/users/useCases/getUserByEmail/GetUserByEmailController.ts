import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase";

export class GetUserByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const createUserUseCase = new GetUserByEmailUseCase();

    const result = await createUserUseCase.execute({ email });

    return res.status(201).json(result);
  }
}
