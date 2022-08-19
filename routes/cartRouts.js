const express = require('express');

const {
  getCartItems,
  createCartItems,
  deleteCartItems,
} = require('../controllers/cartController');

const router = express.Router();

router.route('/').get(getCartItems);
router.route('/').post(createCartItems);
router.route('/:id').put(deleteCartItems);

module.exports = router;
