const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/procurement")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const reportRoutes = require("./route/report.route");
app.use("/api", reportRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
