-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('BCC', 'ERC');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "competitionType" "CompetitionType";
