/*
  Warnings:

  - Added the required column `photo` to the `Spaces` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spaces" ADD COLUMN     "photo" TEXT NOT NULL;
