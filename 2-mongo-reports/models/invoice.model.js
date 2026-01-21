const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  vendor: String,
  paidAmount: Number
});

module.exports = mongoose.model("Invoice", invoiceSchema);
