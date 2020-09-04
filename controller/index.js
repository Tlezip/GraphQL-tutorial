const databaeConnection = require('../database')

const addUser = ({ name, title, age }) => {
  const sql = `
    INSERT INTO user
    (
      name, title, age
    )
    VALUES
    (
      "${name}", "${title}", "${age}"
    )
  `
  databaeConnection.query(sql, (err, data) => {
    if (err) {
      console.log('error', err)
    }
    console.log('success', data)
  })
}

const getUserById = async id => {
  const sql = `
    SELECT * FROM user WHERE id = "${id}"
  `
  const user = await new Promise((resolve, reject) => {
    databaeConnection.query(sql, (err, data) => {
      if (err) {
        console.log('error', err)
        reject({})
      }
      resolve(data.length > 0 ? data[0] : {})
    })
  })
  return user
}

const getUserList = async limit => {
  const sql = `
    SELECT * FROM user
    LIMIT ${limit || 5}
  `
  const users = await new Promise((resolve, reject) => {
    databaeConnection.query(sql, (err, data) => {
      if (err) reject([])
      resolve(data)
    })
  })
  return users
}

module.exports = {
  addUser,
  getUserById,
  getUserList
}