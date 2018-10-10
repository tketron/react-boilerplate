const db = require('../db');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM strings');
    return res.status(201).json(results.rows);
  } catch (e) {
    return next(e);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    const results = await db.query(
      'INSERT INTO strings (string) VALUES ($1) RETURNING *',
      [req.body.string],
    );
    return res.status(201).json(results.rows);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
