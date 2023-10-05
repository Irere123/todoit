import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import * as user from "./graphql/user";

export const schema = makeExecutableSchema({
  typeDefs: [user.typeDefs],
  resolvers: merge(user.resolvers),
});
