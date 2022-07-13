import { Chat } from "@prisma/client";

export interface GetChatsAndUsersDTO {
  room: Chat;
}
