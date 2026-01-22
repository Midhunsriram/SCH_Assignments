const PR = require("../models/pr.models");
const redis = require("../config/redis");

const getPRs = async (req, reply) => {
  const { role, dataPermissions } = req.body;
  const { allowedPlants, maxAmount } = dataPermissions;

  const cacheKey = `permissions_${role}`;

  // 1. Cache permissions in Redis
  const cachedPermissions = await redis.get(cacheKey);

  if (!cachedPermissions) {
    await redis.set(cacheKey, JSON.stringify(dataPermissions));
  }

  // 2. Query MongoDB with permission filters
  const prs = await PR.find({
    plant: { $in: allowedPlants },
    totalAmount: { $lte: maxAmount }
  });

  // 3. Send response
  reply.send({
    role,
    count: prs.length,
    data: prs
  });
};

module.exports = { getPRs };
