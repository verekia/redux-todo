-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_content_key" ON "Todo"("content");
