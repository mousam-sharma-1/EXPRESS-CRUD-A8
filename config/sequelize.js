const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('mysql', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});