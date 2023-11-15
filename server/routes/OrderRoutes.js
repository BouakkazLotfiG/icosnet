const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/OrderController');

// Route to create a new order
router.post('/create', createOrder);

// Route to get all orders
router.get('/', getAllOrders);

// Route to get a single order by id
router.get('/:id', getOrderById);

// Route to update an order
router.put('/update/:id', updateOrder);

// Route to delete an order
router.delete('/delete/:id', deleteOrder);

// Route to search orders by title
router.get('/search/:title', searchOrdersByTitle);

module.exports = router;
