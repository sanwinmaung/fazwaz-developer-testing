const { gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Property {
    id: ID!
    name: String!
    short_title: String!
    images: [Image!]
  }

  type Image {
    id: ID!
    url: String!
    property_id: ID!
  }

  type Query {
    properties: [Property!]!
  }
`;

module.exports = typeDefs;
