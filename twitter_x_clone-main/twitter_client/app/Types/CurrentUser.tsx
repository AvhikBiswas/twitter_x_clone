export type CurrentUser = {
  __typename?: "Query" | undefined;
  getCurrentUser?:
    | {
        __typename?: "User" | undefined;
        id: string;
        firstName: string;
        emailId: string;
        lastName?: string | null | undefined;
        profileUrl: string;
      }
    | null
    | undefined;
};
