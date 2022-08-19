const mongoose = require('mongoose');

const cart = function Cart(oldCart) {
  this.items = oldCart.items;
  this.totalQty = oldCart.totalQty;
  this.totalPrice = oldCart.totalPrice;

  this.add = function (item, id) {
    let storedItems = this.items[id];
    if (!storedItems) {
      storedItems = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItems.qty++;
    storedItems.price = storedItems.item.price * storedItems.qty;
    this.totalQty++;
    this.totalPrice += storedItems.price;
  };
  this.generateArray = function () {
    let arr = [];
    for (const id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
