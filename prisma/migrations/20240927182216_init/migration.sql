-- CreateTable
CREATE TABLE "personal" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "puesto" TEXT,
    "activo" BOOLEAN NOT NULL,
    "direccion" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaEdicion" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "personal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personal_codigo_key" ON "personal"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "personal_email_key" ON "personal"("email");
