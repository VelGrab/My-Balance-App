require('dotenv').config()
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;