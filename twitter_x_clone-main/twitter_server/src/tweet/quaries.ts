export const queries = `#graphql
    getAllTweetsById(skipValue:Int,userID:String):[tweet]
    getAllTweets(skipValue:Int!):[tweet]
    getPresignedUrl(imageType:String!,imageName:String!):String
`;

