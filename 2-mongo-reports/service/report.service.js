const PurchaseOrder = require("../models/purchaseOrder.model");
const Invoice = require("../models/invoice.model");

const generateVendorReport = async () => {
  const poTotals = await PurchaseOrder.aggregate([
    {
      $group: {
        _id: "$vendor",
        totalPOAmount: { $sum: "$amount" }
      }
    }
  ]);

  const invoiceTotals = await Invoice.aggregate([
    {
      $group: {
        _id: "$vendor",
        totalInvoicePaid: { $sum: "$paidAmount" }
      }
    }
  ]);

  return poTotals.map(po => {
    const invoice = invoiceTotals.find(
      inv => inv._id === po._id
    );

    return {
      vendor: po._id,
      totalPOAmount: po.totalPOAmount,
      totalInvoicePaid: invoice ? invoice.totalInvoicePaid : 0
    };
  });
};

module.exports = {
  generateVendorReport
};
