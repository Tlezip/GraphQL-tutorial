const express = require('express')
const { graphql } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const app = express()

const databaseConnection = require('./database')
const schema = require('./schema')
const resolver = require('./resolver')

databaseConnection.connect()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

// databaseConnection.end()

app.listen(4000, () => console.log('Listening Express-GraphQL at port 4000'))