const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const connectToDatabase = require("./config/database");
connectToDatabase();

const app = express();
app.use(express.json());

module.exports = app;
