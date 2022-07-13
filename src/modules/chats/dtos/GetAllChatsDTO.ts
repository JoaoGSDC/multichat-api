import { User } from "@prisma/client";

export interface GetAllChatsDTO {
  user: User;
}
