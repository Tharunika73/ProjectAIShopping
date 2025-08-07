const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  const { userId } = req.params;
  const orders = await Order.find({ userId });
  res.json(orders);
};
