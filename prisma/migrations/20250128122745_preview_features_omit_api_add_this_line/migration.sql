/*
  Warnings:

  - A unique constraint covering the columns `[time]` on the table `Time` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Time_time_key" ON "Time"("time");
