import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const prismaProp = "prisma";
  if (!global[prismaProp]) {
    global[prismaProp] = new PrismaClient();
  }
  prisma = global[prismaProp];
}

export default prisma;
