/*
  Warnings:

  - You are about to drop the column `minor` on the `challengeModel` table. All the data in the column will be lost.
  - Added the required column `couple` to the `challengeModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horny` to the `challengeModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challengeModel" DROP COLUMN "minor",
ADD COLUMN     "couple" BOOLEAN NOT NULL,
ADD COLUMN     "horny" BOOLEAN NOT NULL;
