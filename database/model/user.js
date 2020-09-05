const { DataTypes } = require('sequelize')

const databaseConnection = require('../')

const User = databaseConnection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.NUMBER
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = User