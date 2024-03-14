import { queries } from "./queries";
import {  extraResolver, mutations_resolver, resolvers } from "./resolvers";
import { types } from "./types";
import { mutations } from "./user_mutation";

export const user = { queries,resolvers,extraResolver, types,mutations, mutations_resolver };
