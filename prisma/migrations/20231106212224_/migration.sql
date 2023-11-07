/*
  Warnings:

  - You are about to alter the column `frete` on the `estabelecimento` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "estabelecimento" ALTER COLUMN "frete" SET DATA TYPE DOUBLE PRECISION;
