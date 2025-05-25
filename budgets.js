const express = require('express');
const router = express.Router();
const db = require('../db');

const USER_ID = 'user1';

// Get all budgets
router.get('/', (req, res) => {
  db.all('SELECT * FROM budgets WHERE userId = ?', [USER_ID], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows);
  });
});

// Set a budget
router.post('/', (req, res) => {
  const { category, amount, month } = req.body;
  if (!category || !amount || !month) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  db.run(
    'INSERT OR REPLACE INTO budgets (category, amount, month, userId) VALUES (?, ?, ?, ?)',
    [category, amount, month, USER_ID],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ id: this.lastID });
    }
  );
});

module.exports = router;