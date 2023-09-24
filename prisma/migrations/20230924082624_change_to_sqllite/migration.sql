-- CreateTable
CREATE TABLE "challengeModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "sex" TEXT NOT NULL,
    "couple" BOOLEAN NOT NULL,
    "isNearby" BOOLEAN NOT NULL
);
