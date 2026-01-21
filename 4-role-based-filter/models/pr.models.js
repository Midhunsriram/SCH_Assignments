const mongoose = require("mongoose");

const prSchema = new mongoose.Schema({
  prNumber: String,
  plant: String,
  totalAmount: Number
});

module.exports = mongoose.model("PR", prSchema);
