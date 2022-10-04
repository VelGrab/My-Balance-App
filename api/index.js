require("dotenv").config();
const { conn } = require("./db.js");
const server = require("./app.js");
const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
