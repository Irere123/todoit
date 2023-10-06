import { PrismaClient, User } from "@prisma/client";

export type GraphQLContext = {
  user: User;
  prisma: PrismaClient;
};
