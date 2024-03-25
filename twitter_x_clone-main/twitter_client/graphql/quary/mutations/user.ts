import { graphql } from "../../../gql";
export const followUser = graphql(`
  mutation followMutation($toFollow: String!) {
    followUser(toFollow: $toFollow)
  }
`);

export const unfollowUser = graphql(`
  mutation unfollowMutation($toUnFollow: String!) {
    UnfollowUser(toUnFollow: $toUnFollow)
  }
`);
