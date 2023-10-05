import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import mercurius from "mercurius";
import passport from "@fastify/passport";
import secureSession from "@fastify/session";
import cookie from "@fastify/cookie";
import dotenv from "dotenv";
import fastifyPassport from "@fastify/passport";

import { schema } from "./schema";
import { isProd } from "./constants";
import { auth } from "./routes/auth";

const prisma = new PrismaClient();
dotenv.config();

async function main() {
  const app = fastify();

  app.register(cookie);
  app.register(secureSession, {
    secret: process.env.SESSION_SECRET!,
  });
  app.register(passport.initialize());
  app.register(passport.secureSession());

  fastifyPassport.registerUserDeserializer(async (user, _req) => {
    return user;
  });

  fastifyPassport.registerUserSerializer(async (user, _req) => {
    return user;
  });

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
