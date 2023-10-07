import { GraphQLContext } from "../context";

export const typeDefs = /* GraphQL */ `
  scalar Datetime

  type User {
    id: ID!
    username: String!
    avatarUrl: String!
    email: String!
    createdAt: Datetime
    updatedAt: Datetime
  }

  type Query {
    getUsers: [User]
    me: User
  }

  input CreateUserInput {
    email: String
  }

  type CreateUserResponse {
    accessToken: String
    refreshToken: String
  }

  type Mutation {
    signup(data: CreateUserInput): CreateUserResponse
  }
`;

export const resolvers = {
  Query: {
    me: (_parent: unknown, _args: {}, ctx: GraphQLContext) => {
      if (!ctx.user) {
        return null;
      }

      return ctx.user;
    },
    getUsers: () => [],
  },
  Mutation: {
    signup: () => {},
  },
};
