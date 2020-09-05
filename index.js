const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()

const databaseConnection = require('./database')
const schema = require('./schema')
const resolver = require('./resolver')

const databaseConnectionChecking = async(req, res, next) => {
  try {
    await databaseConnection.authenticate()
    console.log('Connection has been published successfully.')
    next()
  } catch (err) {
    console.error('Unable to connect to database: ', err)
  }
}

app.use('/graphql', databaseConnectionChecking, graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

app.listen(4000, () => console.log('Listening Express-GraphQL at port 4000'))