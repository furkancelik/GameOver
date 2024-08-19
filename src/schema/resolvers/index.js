import { mergeResolvers } from "@graphql-tools/merge";

import { subscribersResolvers } from "./subscribers";

export const resolvers = mergeResolvers([subscribersResolvers]);
