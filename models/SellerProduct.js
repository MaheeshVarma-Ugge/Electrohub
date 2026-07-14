const mongoose = require('mongoose');

const sellerProductSchema = new mongoose.Schema({
  name: String,
  desc: String,
  rating: Number,
  price: Number,
  contact: String,
  image: String, // data URL or hosted URL
  payments: [String], // e.g. ['PhonePe','Google Pay','Paytm','UPI']
  sellerShop: String
}, { timestamps: true });

module.exports = mongoose.model('SellerProduct', sellerProductSchema);
