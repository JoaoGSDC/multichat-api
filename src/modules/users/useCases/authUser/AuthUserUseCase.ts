import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../prisma/clients";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

interface Auth extends User {
  token?: string;
}

export class AuthUserUseCase {
  async execute({ email, password }: CreateUserDTO): Promise<Auth> {
    if (!password) throw "Password is null!";

    const user = (await prisma.user.findFirst({
      where: {
        email,
      },
    })) as User;

    const pw = await bcrypt.compare(password, user.password);

    if (!pw) {
      throw "This is not a valid password!";
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET ?? "", {
      expiresIn: 86400,
    });

    let auth: Auth = user;
    auth.password = "";
    auth.token = token;

    return auth;
  }
}
