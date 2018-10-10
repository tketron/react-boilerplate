const db = require('../db');
const express = require('express');
const router = express.Router();

router.get('/all', async (req, res) => {
  const results = await db.query('SELECT * FROM strings');
  console.log(results);
  res.json(results);
});

module.exports = router;
