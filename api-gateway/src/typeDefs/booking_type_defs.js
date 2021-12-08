const { gql } = require("apollo-server");

const bookingTypeDefs = gql`
  type booking {
    id: String!
    usernameOrigin: String!
    gym: String!
    value: Int!
    date: String!
    bookingdate: String!
  }

  input bookingInput {
    usernameOrigin: String!
    gym: String!
    value: Int!
    bookingdate: String!
  }

  extend type Query {
    bookingByUsername(username: String!): [booking]
  }

  extend type Mutation {
    createBooking(booking: bookingInput!): booking
  }
`;

module.exports = bookingTypeDefs;