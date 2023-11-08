/*
  Warnings:

  - You are about to drop the `estabelecimento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "estabelecimento";

-- CreateTable
CREATE TABLE "Local" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "credential" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "freigt" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Local_credential_key" ON "Local"("credential");
