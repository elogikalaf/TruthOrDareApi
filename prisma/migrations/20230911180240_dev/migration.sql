/*
  Warnings:

  - Added the required column `isNearby` to the `challengeModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challengeModel" ADD COLUMN     "isNearby" BOOLEAN NOT NULL;
