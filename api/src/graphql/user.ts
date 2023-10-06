export const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    username: String!
    avatarUrl: String!
    email: String!
  }

  type Query {
    getUsers: [User]
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
    getUsers: () => [],
  },
  Mutation: {
    signup: () => {},
  },
};
