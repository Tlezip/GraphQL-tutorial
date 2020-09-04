const { addUser, getUserById } = require('../controller')

const resolver = {
  hello: () => 'Hello World',
  addUser: ({ name, title, age }) => addUser({ name, title, age }),
  user: ({ id }) => getUserById(id)
}

module.exports = resolver