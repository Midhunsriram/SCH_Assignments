const express = require("express");
const router = express.Router();
const { getPRs } = require("../controllers/pr.controller");

router.post("/getPRs", getPRs);

module.exports = router;
