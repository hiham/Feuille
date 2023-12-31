const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const dataFolderPath = path.join(__dirname, "data");

var bcrypt = require("bcryptjs");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});

require("./routes/auth.routes")(app);
require("./routes/users.routes")(app);
require("./routes/feuille.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
const Role = db.role;
const User = db.user;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });

  User.create({
    username: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 8),
  }).then((user) => {
    user.setRoles([2]);
  });

  User.create({
    username: "hiham",
    email: "hiham@user.com",
    password: bcrypt.hashSync("123456", 8),
  }).then((user) => {
    user.setRoles([1]);
  });
}
