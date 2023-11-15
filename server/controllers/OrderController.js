const Order = require('../models/OrderModel');

exports.createOrder = async (req, res) => {
  console.log(req.body);
  const { title, description, price, user } = req.body;

  // Validate input
  if (!title || !description || !price) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check if order with title already exists
  const orderExists = await Order.findOne({ title });
  if (orderExists) {
    return res
      .status(400)
      .json({ msg: 'An order with this title already exists' });
  }

  // Create a new order
  const newOrder = new Order({
    title,
    description,
    price,
    user,
    status: 'Pending',
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: 'Order not found' });

    // Check for valid status transition
    if (!['Pending', 'Processing', 'Shipped', 'Delivered'].includes(status)) {
      return res.status(400).json({ msg: 'Invalid status' });
    }

    order.status = status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: 'Order not found' });

    await order.remove();
    res.json({ msg: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
