const { buildSchema } = require('graphql')

const helloSchema = buildSchema(
  `
    type User {
      id: Int
      age: Int
      name: String
      title: String
    }

    type Query {
      hello: String
      users: [User]
      user(id: Int): User
    }

    type Mutation {
      addUser(name: String, title: String, age: Int): User
    }
  `
)

module.exports = helloSchema
