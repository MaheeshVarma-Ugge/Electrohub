const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true }, // e.g. '#ORD-001'
  product: String,
  amount: Number,
  date: String,
  deliveryDate: String,
  status: { type: String, default: 'Processing' }, // Processing | Shipped | Delivered | Cancelled
  customer: String,
  address: String,
  payment: String,
  source: String // 'catalog' | 'post'
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
