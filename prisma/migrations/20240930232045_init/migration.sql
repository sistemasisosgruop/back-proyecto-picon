/*
  Warnings:

  - You are about to drop the column `codigo` on the `empresa` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "empresa_codigo_key";

-- AlterTable
ALTER TABLE "empresa" DROP COLUMN "codigo";
