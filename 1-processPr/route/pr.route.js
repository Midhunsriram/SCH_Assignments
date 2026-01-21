const express = require("express");
const { processPR } = require("../service/pr.service");

const router = express.Router();

router.post("/processPR", processPR);

module.exports = router;
