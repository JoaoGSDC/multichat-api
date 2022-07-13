import { IUserDTO } from "../../../interfaces/IUserDTO";

export interface CreateChatDTO {
  name: string;
  roomId?: string;
  isPrivate?: boolean;
  insertMembers: IUserDTO[];
  removeMembers: IUserDTO[];
}
