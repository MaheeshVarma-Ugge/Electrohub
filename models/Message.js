const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  to: String,       // 'user' | 'seller' | 'all' etc.
  recipient: String, // specific user/shop name, if applicable
  subject: String,
  body: String,
  date: String
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
