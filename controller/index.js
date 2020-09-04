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

module.exports = {
  addUser
}