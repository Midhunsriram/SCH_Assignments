const express = require("express");
const router = express.Router();
const { getPRs } = require("../controllers/pr.controller");

router.get("/getPRs", getPRs);

module.exports = router;
