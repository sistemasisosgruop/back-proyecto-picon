-- AlterTable
ALTER TABLE "personal" ADD COLUMN     "puestoId" INTEGER;

-- CreateTable
CREATE TABLE "puesto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL,

    CONSTRAINT "puesto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_puestoId_fkey" FOREIGN KEY ("puestoId") REFERENCES "puesto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
