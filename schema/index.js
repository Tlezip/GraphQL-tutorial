const { buildSchema } = require('graphql')

const schema = buildSchema(
  `
    type User {
      id: Int
      age: Int
      name: String
      title: String
    }

    type Query {
      hello: String
      users(limit: Int): [User]
      user(id: Int): User
    }

    type Mutation {
      addUser(name: String, title: String, age: Int): User
    }
  `
)

module.exports = schema
