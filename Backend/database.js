const mongoose = require("mongoose");
const mongourl = `mongodb+srv://soumadipsantra2004:santra-INoteBook@cluster1.02kl4do.mongodb.net/`;

const mongodbtoConnect = () => {
  mongoose.connect(mongourl);
};

module.exports = mongodbtoConnect;
