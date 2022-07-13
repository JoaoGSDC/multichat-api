import { Chat, UserChat } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { DeleteChatDTO } from "../../dtos/DeleteChatDTO";

export class DeleteChatsUseCase {
  async execute({ chatId }: DeleteChatDTO): Promise<boolean> {
    await prisma.message.deleteMany({
      where: {
        chatId,
      },
    });

    await prisma.userChat.deleteMany({
      where: {
        chatId,
      },
    });

    await prisma.chat.deleteMany({
      where: {
        id: chatId,
      },
    });

    return true;
  }
}
