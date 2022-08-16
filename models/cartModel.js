const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: Stirng,
  product: [String],
  quantity: [Number],
  price: [Number],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
