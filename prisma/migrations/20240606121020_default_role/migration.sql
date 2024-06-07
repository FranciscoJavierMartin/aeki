/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'REVIEWER', 'CONSULTANT');

-- AlterTable
ALTER TABLE "Budget" ALTER COLUMN "dueDate" SET DEFAULT NOW() + INTERVAL '15 days';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'REVIEWER';
