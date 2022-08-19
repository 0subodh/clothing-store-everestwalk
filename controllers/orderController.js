const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const catchAsync = require('../utlis/catchAsync');
const AppError = require('../utlis/appError');

// unique order number for every order
// customer can make multiple order at a time
exports.createOrder = catchAsync(async (req, res) => {
  const cart = req.body.cartId;
  const total = req.body.total;
  const user = req.user._id;

  const order = new Order({
    cart,
    user,
    total,
  });

  const orderDoc = await order.save();
  const cartDoc = await Cart.findById(orderDoc.cart._id).populate({
    path: 'products.product',
  });

  const newOrder = {
    _id: orderDoc._id,
    createdAt: orderDoc.created,
    user: orderDoc.user,
    total: orderDoc.total,
    products: cartDoc.products,
  };

  res.status(200).json({
    status: 'success',
    message: 'Your order has been placed successfully',
    data: {
      order: newOrder,
    },
  });
});

// fetch all orders of specific user
exports.getAllOrders = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const ordersDoc = await Order.find()
    .populate({
      path: 'cart',
      populate: {
        path: 'products.product',
      },
    })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  res.status(200).json({
    status: 'success',
    currentPage: Number(page),
    data: {
      ordersDoc,
    },
  });
});
