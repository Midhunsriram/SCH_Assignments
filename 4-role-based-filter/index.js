const express = require("express");
const mongoose = require("mongoose");
const prRoutes = require("./route/pr.route");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/procurement");

app.use("/api", prRoutes);

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
