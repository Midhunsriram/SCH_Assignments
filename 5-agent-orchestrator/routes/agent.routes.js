const express = require("express");
const router = express.Router();
const { executeFlow } = require("../services/orchestrator");

router.post("/executeAgentFlow", async (req, res) => {
  try {
    const response = await executeFlow(req.body);
    res.json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
