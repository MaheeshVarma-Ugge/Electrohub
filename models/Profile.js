const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  phone: String,
  city: String,
  address: String
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
