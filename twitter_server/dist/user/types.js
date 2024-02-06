"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
exports.types = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String
    emailId: String!
    profileUrl: String!
    password: String
  }
`;