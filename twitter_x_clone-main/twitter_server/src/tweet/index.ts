import { createNewTweetMutation} from "./mutations";
import { resolver } from "./resolvers";
import { types } from "./types";
export const tweet = { resolver, types,createNewTweetMutation};
