export const types = `#graphql
type tweet{
    id:ID!
    imageURL:String
    content: String
    hashTag:String
    auther:User
    }
input CreateTweetData {
        content:String!
        imageURL:String
    }
 type createTweetReturn{
  userID:String!
  imageURL:String
  content:String!
  hashTag:String
}

type Like {
  user: User
  tweet: tweet
}
`;
