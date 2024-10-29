import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });

  const issue = await prisma.issue.create({
    data: {
      title: "First Issue",
      status: "OPEN",
      priority: "HIGH",
      assigneeId: user.id,
      tags: {
        create: [{ name: "bug" }],
      },
    },
  });

  console.log({ user, issue });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
