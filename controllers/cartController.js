const Cart = require('../models/cartModel');

// add products to cart
const addItemsToCart = catchAsync(async (req, res) => {
  const user = req.user._id;

  const cart = new Cart({
    user,
    products,
  });

  const cartDoc = await cart.save();

  res.status(200).json({
    status: 'success',
    data: {
      cartId: cartDoc.id,
    },
  });
});

// fetch all products of cart
const getCartProducts = catchAsync(async (req, res) => {});

// delete cart items
const deleteCartItems = catchAsync(async (req, res) => {
  await Cart.deleteOne({ _id: req.params.cartId });

  res.status(200).json({
    status: 'success',
  });
});
