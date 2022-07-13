import { Chat } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { CreateChatDTO } from "../../dtos/CreateChatDTO";

export class UpdateChatUseCase {
  async execute({
    name,
    roomId = "",
    insertMembers,
    removeMembers,
  }: CreateChatDTO): Promise<Chat> {
    await prisma.chat.updateMany({
      where: {
        id: roomId,
      },

      data: {
        name,
      },
    });

    for (let user of insertMembers) {
      if (!user.id) {
        break;
      }

      await prisma.userChat.create({
        data: {
          userId: user.id,
          chatId: roomId,
        },
      });
    }

    for (let user of removeMembers) {
      if (!user.id) {
        break;
      }

      await prisma.userChat.deleteMany({
        where: {
          userId: user.id,
          chatId: roomId,
        },
      });
    }

    const chat = (await prisma.chat.findUnique({
      where: {
        id: roomId,
      },
    })) as Chat;

    return chat;
  }
}
