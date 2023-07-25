-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "zipCode" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "addresses_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_addresses" ("city", "complement", "eventId", "id", "neighborhood", "number", "state", "zipCode") SELECT "city", "complement", "eventId", "id", "neighborhood", "number", "state", "zipCode" FROM "addresses";
DROP TABLE "addresses";
ALTER TABLE "new_addresses" RENAME TO "addresses";
CREATE UNIQUE INDEX "addresses_eventId_key" ON "addresses"("eventId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
