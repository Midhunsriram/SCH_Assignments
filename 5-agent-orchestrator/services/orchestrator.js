const flowConfig = require("../config/agentFlow.json");

const agents = {
  DocumentExtractionAgent: require("../agents/DocumentExtractionAgent"),
  ValidationAgent: require("../agents/ValidationAgent"),
  CreationAgent: require("../agents/CreationAgent")
};

async function executeFlow(input) {
  let result = input;

  for (const agentName of flowConfig.flow) {
    const agent = agents[agentName];
    result = await agent.execute(result);
  }

  return result;
}

module.exports = { executeFlow };
