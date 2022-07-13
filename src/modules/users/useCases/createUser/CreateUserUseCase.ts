import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { prisma } from "../../../../prisma/clients";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { GetUserByEmailUseCase } from "../getUserByEmail/GetUserByEmailUseCase";

export class CreateUserUseCase {
  async execute({
    name = "",
    email,
    password = "",
  }: CreateUserDTO): Promise<User> {
    const createUserUseCase = new GetUserByEmailUseCase();
    const userAlreadyExists = await createUserUseCase.execute({ email });

    if (userAlreadyExists) {
      throw "User already exists!";
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}
