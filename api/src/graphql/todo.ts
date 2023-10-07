import { GraphQLError } from "graphql";
import { GraphQLContext } from "../context";

const { withFilter } = require("mercurius");

export const typeDefs = /* GraphQL */ `
  type Todo {
    id: ID
    text: String!
    completed: String!
    createdAt: Datetime
    updatedAt: Datetime
  }

  type Query {
    getTodos(creatorId: ID): [Todo]
  }

  type Mutation {
    createTodo(text: String): Todo!
  }

  type Subscription {
    todoAdded(creatorId: ID!): Todo!
  }
`;

export const resolvers = {
  Query: {
    getTodos: async (_parent: unknown, _args: {}, ctx: GraphQLContext) => {
      if (!ctx.user) {
        throw new GraphQLError("Not authenticated");
      }
      return await ctx.prisma.todo.findMany({
        where: { creatorId: ctx.user.id },
      });
    },
  },
  Mutation: {
    createTodo: async (
      _parent: unknown,
      args: { text: string },
      ctx: GraphQLContext
    ) => {
      if (!ctx.user) {
        throw new GraphQLError("Not authenticated");
      }
      const todo = await ctx.prisma.todo.create({
        data: { text: args.text, creatorId: ctx.user.id },
      });

      ctx.pubsub.publish({
        topic: "TODO_ADDED",
        payload: { todoAdded: todo },
      });

      return todo;
    },
  },

  Subscription: {
    todoAdded: {
      subscribe: withFilter(
        (_root: unknown, _args: {}, { pubsub }: GraphQLContext) =>
          pubsub.subscribe("TODO_ADDED"),
        (payload: any, args: { creatorId: string }) =>
          payload.todoAdded.creatorId === args.creatorId
      ),
    },
  },
};
