import { Message } from "@prisma/client";
import { prisma } from "../../../../prisma/clients";
import { CreateMessageDTO } from "../../dtos/CreateMessageDTO";

export class CreateMessageUseCase {
  async execute({ msg, userId, chatId }: CreateMessageDTO): Promise<Message> {
    const message = (await prisma.message.create({
      data: {
        msg,
        user: {},
        chat: {},
        userId: userId,
        chatId: chatId,
      },
    })) as Message;

    return message;
  }
}
