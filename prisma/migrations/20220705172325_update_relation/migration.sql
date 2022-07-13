/*
  Warnings:

  - The primary key for the `user_chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `chat` on the `user_chat` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user_chat` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `user_chat` table. All the data in the column will be lost.
  - Added the required column `chatId` to the `user_chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_chat` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_chat" (
    "userId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "chatId"),
    CONSTRAINT "user_chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_chat_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user_chat" ("createdAt") SELECT "createdAt" FROM "user_chat";
DROP TABLE "user_chat";
ALTER TABLE "new_user_chat" RENAME TO "user_chat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
