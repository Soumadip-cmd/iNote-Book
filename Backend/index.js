const express = require("express");
const path = require("path");
var cors = require('cors')
const mongodbtoConnect = require("./database.js");
mongodbtoConnect();

const port = 8000;
const app = express();
 
app.use(cors())

app.use(require(path.join(__dirname, "routes/browse.js")));
app.use(require(path.join(__dirname, "routes/fetchnote.js")));

app.listen(port, () => {
  console.log(`Port Number http://localhost:${port}`);
});
