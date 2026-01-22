const processPR = (req, res) => {
    const pr = req.body;
  
    // Rule 1: Auto approve if amount < 10000
    if (pr.totalAmount < 10000) {
      pr.status = "Approved";
    } else {
      pr.approvalStatus = "Waiting for mannual approval";
    }
  
    // Rule 2: High urgency if delivery days < 3
    if (pr.deliveryDays < 3) {
      pr.urgency = "High";
    }
  
    res.json(pr);
  };
  
  module.exports = { processPR };
  