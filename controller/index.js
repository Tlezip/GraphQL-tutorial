const UserModel = require('../database/model/user')

const addUser = async({ name, title, age }) => {
  const user = await UserModel.create({
    name,
    title,
    age
  })
  return user
}

const getUserById = async id => {
  const user = await UserModel.findOne({
    where: {
      id: id
    }
  })
  return user
}

const getUserList = async limit => {
  const users = await UserModel.findAll({ limit })
  return users
}

module.exports = {
  addUser,
  getUserById,
  getUserList
}