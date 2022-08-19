const express = require('express');

const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require('../controllers/productController');

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/').post(createProduct);
router.route('/:id').put(updateProduct);

module.exports = router;
