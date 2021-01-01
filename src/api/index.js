const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, '');

require('dotenv').config();

var testRouter = require("./routes/test");
var heroesRouter = require("./routes/heroes");
var winrateRouter = require("./routes/winrate");
var matchupRouter = require("./routes/matchups");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/test",testRouter);
app.use("/",heroesRouter);
app.use("/",winrateRouter);
app.use("/",matchupRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is up!');
});