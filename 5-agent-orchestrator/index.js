const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./routes/agent.routes"));

app.listen(3000, () => {
  console.log("Agent Orchestrator running on port 3000");
});
