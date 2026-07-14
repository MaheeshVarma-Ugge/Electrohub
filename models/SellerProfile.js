const mongoose = require('mongoose');

const sellerProfileSchema = new mongoose.Schema({
  shop: String,
  contact: String,
  email: { type: String, unique: true, sparse: true },
  city: String,
  address: String
}, { timestamps: true });

module.exports = mongoose.model('SellerProfile', sellerProfileSchema);
