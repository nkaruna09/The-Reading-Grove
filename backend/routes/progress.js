// routes/progress.js
const express = require('express');
const router = express.Router();

// Get yearly progress
router.get('/yearly', async (req, res) => {
  // Logic to get the user's yearly progress
  res.json({ progress: 80 }); // Example response
});

// Set yearly goal
router.post('/goal', async (req, res) => {
  const { goal } = req.body;
  // Logic to save or update the user's goal
  res.json({ message: `Goal set to ${goal}` });
});

module.exports = router;
