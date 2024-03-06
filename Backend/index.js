const express = require("express");
const path = require("path");
const mongodbtoConnect = require("./database.js");
mongodbtoConnect();

const port = 9010;
const app = express();

app.use(require(path.join(__dirname, "routes/browse.js")));
app.use(require(path.join(__dirname, "routes/fetchnote.js")));

app.listen(port, () => {
  console.log(`Port Number http://localhost:${port}`);
});
