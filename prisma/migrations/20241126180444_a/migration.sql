/*
  Warnings:

  - You are about to drop the column `dia` on the `ClinicaOtica` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `ClinicaOtica` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `ClinicaOtica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `ClinicaOtica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `ClinicaOtica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `ClinicaOtica` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClinicaOtica" DROP COLUMN "dia",
ADD COLUMN     "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "idade" INTEGER NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClinicaOtica_email_key" ON "ClinicaOtica"("email");
