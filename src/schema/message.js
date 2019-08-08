const { gql } = require('apollo-server');

const schema = gql`
  extend type Query {
    messages: [Message!]!
    message(id: ID!): Message!
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }

  input MessageInput {
    id: ID!
    text: String!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
    updateMessage(message: MessageInput!): Message
  }
`;

module.exports = schema;