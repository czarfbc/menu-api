-- CreateTable
CREATE TABLE "estabelecimento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "credencial" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "frete" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "estabelecimento_pkey" PRIMARY KEY ("id")
);
