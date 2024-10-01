-- AlterTable
ALTER TABLE "almacen" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "sucursal" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "familia" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_familia" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "familiaId" INTEGER NOT NULL,

    CONSTRAINT "sub_familia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "familia_codigo_key" ON "familia"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "sub_familia_codigo_key" ON "sub_familia"("codigo");

-- AddForeignKey
ALTER TABLE "familia" ADD CONSTRAINT "familia_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_familia" ADD CONSTRAINT "sub_familia_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "familia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
