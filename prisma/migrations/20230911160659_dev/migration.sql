-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EXECUTOR');

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "minor" BOOLEAN NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);
