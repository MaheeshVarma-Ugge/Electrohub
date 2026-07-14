require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const ordersRouter = require('./routes/orders');
const messagesRouter = require('./routes/messages');
const sellerProductsRouter = require('./routes/sellerProducts');
const profileRouter = require('./routes/profile');
const sellerProfileRouter = require('./routes/sellerProfile');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/electrohub';

app.use(cors());
app.use(express.json({ limit: '10mb' })); // higher limit: product images are sent as base64 data URLs

// Serve the existing ElectroHub frontend (index.html, script.js, styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// ── API routes ──
app.use('/api/orders', ordersRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/seller-products', sellerProductsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/seller-profile', sellerProfileRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mongoConnected: mongoose.connection.readyState === 1 });
});

// Fallback: send index.html for any other route (keeps deep links working)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected:', MONGO_URI);
    app.listen(PORT, () => console.log(`ElectroHub server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
