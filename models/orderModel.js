const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  cart: { type: mongoose.Schema.ObjectId, ref: 'Cart' },
  product: [String],
  billingDetail: { type: String, required: true },
  shippingDetail: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
