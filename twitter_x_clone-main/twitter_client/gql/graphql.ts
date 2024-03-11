/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTweetData = {
  content: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewTweet?: Maybe<Tweet>;
};


export type MutationCreateNewTweetArgs = {
  payload?: InputMaybe<CreateTweetData>;
};

export type Query = {
  __typename?: 'Query';
  GetUserDetails?: Maybe<UserDataWithId>;
  getAllTweets?: Maybe<Array<Maybe<Tweet>>>;
  getAllTweetsById?: Maybe<Array<Maybe<Tweet>>>;
  getCurrentUser?: Maybe<User>;
  verifyAuthToken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetUserDetailsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAllTweetsArgs = {
  skipValue: Scalars['Int']['input'];
};


export type QueryGetAllTweetsByIdArgs = {
  skipValue?: InputMaybe<Scalars['Int']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVerifyAuthTokenArgs = {
  token: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  emailId: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  profileUrl: Scalars['String']['output'];
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};

export type UserDataWithId = {
  __typename?: 'UserDataWithID';
  emailId: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileUrl: Scalars['String']['output'];
};

export type CreateTweetReturn = {
  __typename?: 'createTweetReturn';
  content: Scalars['String']['output'];
  hashTag?: Maybe<Scalars['String']['output']>;
  imageURL?: Maybe<Scalars['String']['output']>;
  userID: Scalars['String']['output'];
};

export type Tweet = {
  __typename?: 'tweet';
  auther?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  hashTag?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
};

export type CreateTweetMutationMutationVariables = Exact<{
  payload?: InputMaybe<CreateTweetData>;
}>;


export type CreateTweetMutationMutation = { __typename?: 'Mutation', createNewTweet?: { __typename?: 'tweet', content?: string | null } | null };

export type GetUserTweetQueryVariables = Exact<{
  skipValue?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserTweetQuery = { __typename?: 'Query', getAllTweetsById?: Array<{ __typename?: 'tweet', content?: string | null, id: string, imageURL?: string | null, auther?: { __typename?: 'User', firstName: string, lastName?: string | null, profileUrl: string } | null } | null> | null };

export type GetAllTweetsByIdQueryVariables = Exact<{
  skipValue: Scalars['Int']['input'];
}>;


export type GetAllTweetsByIdQuery = { __typename?: 'Query', getAllTweets?: Array<{ __typename?: 'tweet', content?: string | null, auther?: { __typename?: 'User', firstName: string, lastName?: string | null, emailId: string, profileUrl: string } | null } | null> | null };

export type VerifyAuthTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyAuthTokenQuery = { __typename?: 'Query', verifyAuthToken?: string | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', id: string, firstName: string, emailId: string, lastName?: string | null, profileUrl: string } | null };

export type GetUserDetailsQueryVariables = Exact<{
  getUserDetailsId: Scalars['String']['input'];
}>;


export type GetUserDetailsQuery = { __typename?: 'Query', GetUserDetails?: { __typename?: 'UserDataWithID', id: string, firstName: string, emailId: string, lastName?: string | null, profileUrl: string } | null };


export const CreateTweetMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTweetMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTweetData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNewTweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateTweetMutationMutation, CreateTweetMutationMutationVariables>;
export const GetUserTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skipValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTweetsById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skipValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skipValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"userID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"auther"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserTweetQuery, GetUserTweetQueryVariables>;
export const GetAllTweetsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTweetsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skipValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTweets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skipValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skipValue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"auther"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTweetsByIdQuery, GetAllTweetsByIdQueryVariables>;
export const VerifyAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyAuthToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAuthToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<VerifyAuthTokenQuery, VerifyAuthTokenQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUserDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getUserDetailsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getUserDetailsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserDetailsQuery, GetUserDetailsQueryVariables>;