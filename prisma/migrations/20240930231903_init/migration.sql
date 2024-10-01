-- AlterTable
ALTER TABLE "personal" ADD COLUMN     "empresaId" INTEGER;

-- CreateTable
CREATE TABLE "empresa" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT,
    "nombre" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT,
    "web" TEXT,
    "logo" TEXT,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresa_codigo_key" ON "empresa"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_ruc_key" ON "empresa"("ruc");

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
