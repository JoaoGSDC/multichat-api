import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class GetUserByEmailUseCase {
  async execute({ email }: CreateUserDTO): Promise<User> {
    const user = (await prisma.user.findUnique({
      where: {
        email,
      },
    })) as User;

    return user;
  }
}
