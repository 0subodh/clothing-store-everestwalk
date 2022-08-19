const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    trim: true,
    maxlength: [
      40,
      'A product name must have less or equal than 40 characters',
    ],
    minlength: [3, 'A product name must have mininum 10 characters'],
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  color: String,
  description: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL'],
    default: 'L',
  },
  stock: Number,
  material: String,
  picture: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
