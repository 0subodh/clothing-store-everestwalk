const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: String,
  product: [String],
  price: Number,
  billingDetail: String,
  shippingDetail: String,
});
