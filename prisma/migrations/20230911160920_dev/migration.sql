/*
  Warnings:

  - You are about to drop the `Challenge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Challenge";

-- CreateTable
CREATE TABLE "challengeModel" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "minor" BOOLEAN NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "challengeModel_pkey" PRIMARY KEY ("id")
);
