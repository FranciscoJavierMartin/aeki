/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Budget" ALTER COLUMN "dueDate" SET DEFAULT NOW() + INTERVAL '15 days';

-- CreateIndex
CREATE UNIQUE INDEX "Customer_dni_key" ON "Customer"("dni");
