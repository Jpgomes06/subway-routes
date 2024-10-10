-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "address" VARCHAR(30) NOT NULL,
    "street" VARCHAR(30) NOT NULL,
    "number" VARCHAR(15) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "zip_code" VARCHAR(20) NOT NULL,
    "website" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Manufacturer_phone_key" ON "Manufacturer"("phone");

CREATE UNIQUE INDEX "Manufacturer_email_key" ON "Manufacturer"("email");
