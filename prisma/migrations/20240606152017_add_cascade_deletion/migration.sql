-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_customerId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnBudgets" DROP CONSTRAINT "ProductsOnBudgets_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnBudgets" DROP CONSTRAINT "ProductsOnBudgets_productId_fkey";

-- AlterTable
ALTER TABLE "Budget" ALTER COLUMN "dueDate" SET DEFAULT NOW() + INTERVAL '15 days';

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnBudgets" ADD CONSTRAINT "ProductsOnBudgets_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnBudgets" ADD CONSTRAINT "ProductsOnBudgets_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
