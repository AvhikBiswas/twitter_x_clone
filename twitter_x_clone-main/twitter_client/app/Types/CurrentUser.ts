export type CurrentUser = {
  __typename?: "User" | undefined;
  id: string;
  firstName: string;
  emailId: string;
  lastName?: string | null | undefined;
  profileUrl: string;
  userName?: string;
};
