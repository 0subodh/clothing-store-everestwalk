const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  password: {
    type: String,
    required: [true, 'Please provide valid password'],
    minlength: 5,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please prove confirm password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same',
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
