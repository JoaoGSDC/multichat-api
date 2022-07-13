import { prisma } from "../../../../prisma/clients";
import { GetChatsAndUsersDTO } from "../../dtos/GetChatsAndUsersDTO";

export class GetChatsAndUsersUseCase {
  async execute({ room }: GetChatsAndUsersDTO): Promise<any[]> {
    const usersWithChatName: any[] = await prisma.$queryRaw`
        SELECT 
            users.*,
            chats.name as chatName
        FROM 
            users 
        INNER JOIN 
            user_chat
        ON 
            users.id = user_chat.userId 
        INNER JOIN 
            chats 
        ON
            chats.id = user_chat.chatId
        WHERE 
            chats.id = ${room.id}`;

    return usersWithChatName;
  }
}
