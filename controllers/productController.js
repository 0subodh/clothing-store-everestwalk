const Product = require('../models/prodcutModel');

// create Product - admin can only access this
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    status: success,
    data: {
      product,
    },
  });
};

// get all Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  });
};

// update product -only admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      status: 'error',
      message: 'product not found',
    });
  }
};
