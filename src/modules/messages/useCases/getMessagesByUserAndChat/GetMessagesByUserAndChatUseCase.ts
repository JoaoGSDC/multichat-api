import { Message } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { GetMessageDTO } from "../../dtos/GetMessageDTO";

export class GetMessagesByUserAndChatUseCase {
  async execute({ chatId }: GetMessageDTO): Promise<any[]> {
    const messages: any[] = await prisma.$queryRaw`
      SELECT 
        messages.chatId as room,
        users.name as author,
        messages.msg as message,
        messages.createdAt as time
      FROM 
        messages 
      INNER JOIN 
        users
      ON 
        users.id = messages.userId 
      INNER JOIN 
        chats 
      ON
        chats.id = messages.chatId
      WHERE 
        chats.id = ${chatId}
      ORDER BY
        messages.createdAt ASC`;

    return messages;
  }
}
