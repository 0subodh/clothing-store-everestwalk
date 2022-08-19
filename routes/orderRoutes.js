const express = require('express');

const { getAllOrders, createOrder } = require('../controllers/orderController');

const router = express.Router();

router.route('/').get(getAllOrders);
router.route('/').post(createOrder);

module.exports = router;
