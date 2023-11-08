/*
  Warnings:

  - A unique constraint covering the columns `[credencial]` on the table `estabelecimento` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "estabelecimento_credencial_key" ON "estabelecimento"("credencial");
