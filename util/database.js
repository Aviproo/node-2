const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
