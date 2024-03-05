import { createNewTweetMutation } from "./mutations";
import { queries } from "./quaries";
import { AllTweetresolvers, resolver } from "./resolvers";
import { types } from "./types";
export const tweet = {
  resolver,
  types,
  createNewTweetMutation,
  queries,
  AllTweetresolvers
};
