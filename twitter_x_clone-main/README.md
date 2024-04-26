# SocialSynth

## Overview

SocialSynth is a social media platform developed with AI capabilities, using Next.js, Redis, Node.js, and TypeScript. It provides various features to enhance user experience, including GraphQL for efficient data fetching, AWS S3 integration for storing media files securely, and Gemini Pro AI for tweet grammar and spelling correction. Additionally, it implements a tweet suggestion feature using Semiller to provide personalized tweet recommendations and integrates authentication and authorization mechanisms using JWT tokens.


## Project Details
Technologies Used: Next.js, Redis, Prisma, Node.js, TypeScript
### Features:
- Developed a social media platform with AI capabilities.
- Implemented GraphQL for efficient data fetching and optimized loading times.
- Integrated AWS S3 for storing media files securely.
- Utilized Gemini Pro AI for tweet grammar and spelling correction.
- Implemented a tweet suggestion feature using Semiller.
- Integrated authentication and authorization mechanisms using JWT tokens.
- Implemented Rate Limiting for creating posts.


## Getting Started
To get started with the project:

1. Clone the repository from GitHub.
2. Set up the necessary environment variables as mentioned above.
3. Install dependencies using `yarn install`.
4. Run the server and client applications using `yarn run dev` or as per your project setup.


## Environment Variables

To run the project locally, you need to set up the following environment variables:

### Server Environment Variables

```dotenv
DATABASE_URL=
DIRECT_URL=
GOOGLE_AUTH=
JWT_SECRET=
CLIENT_URL=
AWS_ACC_KEY=
AWS_SECRATE_KEY=
AWS_REGION=
REDIS_URL=

```
### Client Environment Variables

```dotenv
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_TWEET_SUGGESTION_AI=
NEXT_PUBLIC_SERVER_URL=
```
Contributions to SocialSynth are welcome! Please feel free to fork the repository, make changes, and submit pull requests.

