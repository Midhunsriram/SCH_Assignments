const express = require("express");
const prRoutes = require("./route/pr.route");

const app = express();
app.use(express.json());

app.use("/api", prRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
