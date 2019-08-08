const { gql } = require('apollo-server');

const schema = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type User {
    id: ID!
    username: String!
    messages: [Message!]
    email: String!
  }

  input UserInput {
    username: String!
    messages: [MessageInput]
    email: String!
  }

  extend type Mutation {
    deleteUser(id: ID!): Boolean!
    createUser(user: UserInput!): User!
  }
`;

module.exports = schema;