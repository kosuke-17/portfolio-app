-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "portfolio" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "like" INTEGER NOT NULL,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);
