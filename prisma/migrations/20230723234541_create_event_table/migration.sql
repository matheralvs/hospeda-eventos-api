-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "privacy" TEXT NOT NULL,
    "description" TEXT,
    "initialDate" DATETIME NOT NULL,
    "initialTime" TEXT NOT NULL
);
