/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `TodoItem` table. All the data in the column will be lost.
  - You are about to drop the column `isPending` on the `TodoItem` table. All the data in the column will be lost.
  - You are about to drop the column `isUpdated` on the `TodoItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TodoItem" DROP COLUMN "isCompleted",
DROP COLUMN "isPending",
DROP COLUMN "isUpdated",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Todo';
