/*
  Warnings:

  - Added the required column `customerId` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "customerId" TEXT NOT NULL,
ALTER COLUMN "dueDate" SET DEFAULT NOW() + INTERVAL '15 days';

-- CreateTable
CREATE TABLE "ProductsOnBudgets" (
    "productId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "pricePerUnit" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "ProductsOnBudgets_pkey" PRIMARY KEY ("productId","budgetId")
);

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnBudgets" ADD CONSTRAINT "ProductsOnBudgets_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnBudgets" ADD CONSTRAINT "ProductsOnBudgets_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
