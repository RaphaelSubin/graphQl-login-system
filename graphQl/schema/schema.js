const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
     id:String
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User!]!
    getSomeUsers(limit:Int!,offset:Int!) :[User!]!
    getUserCount(limit:Int!,offset:Int!):[User!]!
  }

  type Mutation {
    userRegistration(
      name: String!
      username: String!
      email: String!
      password: String!
    ): String
    userLogin(username: String, password: String): String
  }
`;

module.exports = typeDefs;
