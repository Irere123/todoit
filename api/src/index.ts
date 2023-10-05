import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import mercurius from "mercurius";

import { schema } from "./schema";
import { isProd } from "./constants";
import { auth } from "./routes/auth";

const prisma = new PrismaClient();

async function main() {
  const app = fastify();

  app.get("/", async (_, rep) => {
    const users = await prisma.user.findMany();

    rep.send(users);
  });

  app.register(mercurius, { schema, graphiql: !isProd });
  app.register(auth, { prefix: "/auth" });

  await app.listen({ port: 4000 }).then((l) => {
    console.log(`Server runnung on ${l}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
