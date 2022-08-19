const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
  price: Number,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;

const cartSchema = new mongoose.Schema({
  products: [cartItemSchema],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Cart = mongoose.Model('Cart', cartSchema);
module.exports = Cart;
