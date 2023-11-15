const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  searchOrdersByTitle,
} = require('../controllers/OrderController');

// Route to create a new order
router.post('/', createOrder);

// Route to get all orders
router.get('/', getAllOrders);

// Route to get a single order by id
router.get('/:id', getOrderById);

// Route to update an order
router.put('/:id', updateOrder);

// Route to delete an order
router.delete('/:id', deleteOrder);

module.exports = router;
