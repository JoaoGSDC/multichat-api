import { Chat } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { CreateChatDTO } from "../../dtos/CreateChatDTO";

export class CreateChatUseCase {
  async execute({
    name,
    isPrivate = false,
    users,
  }: CreateChatDTO): Promise<Chat> {
    const chat = await prisma.chat.create({
      data: {
        name,
        isPrivate,
      },
    });

    for (let user of users) {
      if (!user.id) {
        break;
      }

      await prisma.userChat.create({
        data: {
          userId: user.id,
          chatId: chat.id,
        },
      });
    }

    return chat;
  }
}
