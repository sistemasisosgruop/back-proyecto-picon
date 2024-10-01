/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `personal` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "personal" ADD COLUMN     "apellidos" TEXT,
ADD COLUMN     "dni" TEXT,
ADD COLUMN     "nombreAbreviado" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "personal_dni_key" ON "personal"("dni");
