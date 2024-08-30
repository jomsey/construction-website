/*
  Warnings:

  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Contact" ("createdAt", "id", "message", "name", "phone") SELECT "createdAt", "id", "message", "name", "phone" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
