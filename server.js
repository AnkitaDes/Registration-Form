const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "registration_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
