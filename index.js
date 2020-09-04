const { graphql } = require('graphql')

const helloSchema = require('./schema/hello')
const resolver = require('./resolver')

graphql(helloSchema, '{ hello }', resolver).then(response => console.log({ response }))