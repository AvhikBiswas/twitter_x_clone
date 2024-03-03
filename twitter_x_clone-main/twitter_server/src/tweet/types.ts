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

`;

