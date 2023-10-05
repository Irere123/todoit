export const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    username: String
  }

  type Query {
    getUsers: [User]
  }
`;

export const resolvers = {
  Query: {
    getUsers: () => [],
  },
};
