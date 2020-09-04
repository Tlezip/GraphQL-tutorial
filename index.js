const { graphql } = require('graphql')

const helloSchema = require('./schema/hello')
const database = require('./resolver')

graphql(helloSchema, '{ hello }', database).then(response => console.log({ response }))