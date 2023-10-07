import { PrismaClient, User } from "@prisma/client";
import { PubSub } from "mercurius";

export type GraphQLContext = {
  user: User;
  prisma: PrismaClient;
  pubsub: PubSub;
};
