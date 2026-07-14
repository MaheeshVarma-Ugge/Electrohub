const express = require('express');
const router = express.Router();
const SellerProfile = require('../models/SellerProfile');

router.get('/', async (req, res) => {
  try {
    const profile = await SellerProfile.findOne();
    res.json(profile || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const profile = await SellerProfile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true
    });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
