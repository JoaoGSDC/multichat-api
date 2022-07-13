import { Chat, UserChat } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { GetAllChatsDTO } from "../../dtos/GetAllChatsDTO";

export class GetAllChatsUseCase {
  async execute({ user }: GetAllChatsDTO): Promise<Chat[]> {
    const userChats = (await prisma.userChat.findMany({
      where: {
        userId: user.id,
      },
    })) as UserChat[];

    let chats: Chat[] = [];

    for (let userChat of userChats) {
      let chat = (await prisma.chat.findUnique({
        where: {
          id: userChat.chatId,
        },
      })) as Chat;

      chats.push(chat);
    }

    return chats;
  }
}
