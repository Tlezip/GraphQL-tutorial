const { buildSchema } = require('graphql')

const helloSchema = buildSchema(
  `
    type Query {
      hello: String
    }
  `
)

export default helloSchema
