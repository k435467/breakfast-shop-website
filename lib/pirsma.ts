import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const prismaProp = "prisma";
  // @ts-expect-error
  if (!global[prismaProp]) {
    // @ts-expect-error
    global[prismaProp] = new PrismaClient();
  }
  // @ts-expect-error
  prisma = global[prismaProp];
}

export default prisma;
