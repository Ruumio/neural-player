import { PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises';

const db = new PrismaClient();


async function main() {

  const points = await db.dataPoint.findMany({
    select: {
      x: true,
      y: true,
    },
    take: 150,
  });

  await writeFile('data.json', JSON.stringify(points))

}

main()

