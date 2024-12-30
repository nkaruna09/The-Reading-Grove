// routes/user.js
const express = require('express');
const router = express.Router();

// Get reading statistics
router.get('/stats', async (req, res) => {
  // Logic to get user's reading statistics
  res.json({ stats: 'Reading statistics' });
});

// Get plant collection
router.get('/plants', async (req, res) => {
  // Logic to get user's plant collection
  res.json({ plants: 'User plant collection' });
});

module.exports = router;
