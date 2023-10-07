import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import * as user from "./graphql/user";
import * as todo from "./graphql/todo";

export const schema = makeExecutableSchema({
  typeDefs: [user.typeDefs, todo.typeDefs],
  resolvers: merge(user.resolvers, todo.resolvers),
});
