const express = require("express");
const router = express.Router();

const reportService = require("../service/report.service");

router.get("/vendor-report", async (req, res) => {
  try {
    const report = await reportService.generateVendorReport();
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vendor report" });
  }
});

module.exports = router;
