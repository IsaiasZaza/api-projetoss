-- CreateTable
CREATE TABLE "ClinicaOtica" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "dia" TEXT NOT NULL,

    CONSTRAINT "ClinicaOtica_pkey" PRIMARY KEY ("id")
);
