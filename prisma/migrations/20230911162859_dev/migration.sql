/*
  Warnings:

  - You are about to drop the column `gender` on the `challengeModel` table. All the data in the column will be lost.
  - Added the required column `sex` to the `challengeModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challengeModel" DROP COLUMN "gender",
ADD COLUMN     "sex" TEXT NOT NULL;
