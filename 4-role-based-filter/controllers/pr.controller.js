const PR = require("../models/pr.models");
const redis = require("../config/redis");
const permissions = require("../config/permission.json");

exports.getPRs = async (req, res) => {
  try {
    const cacheKey = "buyer_permissions";

    let permissionData = await redis.get(cacheKey);

    if (!permissionData) {
      permissionData = JSON.stringify(permissions.dataPermissions);
      await redis.set(cacheKey, permissionData);
    }

    const { allowedPlants, maxAmount } = JSON.parse(permissionData);

    const prs = await PR.find({
      plant: { $in: allowedPlants },
      totalAmount: { $lte: maxAmount }
    });

    res.json({
      role: permissions.role,
      count: prs.length,
      data: prs
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
