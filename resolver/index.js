const { addUser } = require('../controller')

const resolver = {
  hello: () => 'Hello World',
  addUser: ({ name, title, age }) => addUser({ name, title, age })
}

module.exports = resolver