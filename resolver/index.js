const { addUser, getUserById, getUserList } = require('../controller')

const resolver = {
  hello: () => 'Hello World',
  addUser: ({ name, title, age }) => addUser({ name, title, age }),
  user: ({ id }) => getUserById(id),
  users: ({ limit = 5 }) => getUserList(limit)
}

module.exports = resolver