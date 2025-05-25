const express = require('express');
const router = express.Router();
const db = require('../db');

// Hardcoded userId for single-user app
const USER_ID = 'user1';

// Get all transactions
router.get('/', (req, res) => {
  db.all('SELECT * FROM transactions WHERE userId = ?', [USER_ID], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows);
  });
});

// Add a transaction
router.post('/', (req, res) => {
  const { type, amount, category, date, description } = req.body;
  if (!type || !amount || !category || !date || !['income', 'expense'].includes(type)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  db.run(
    'INSERT INTO transactions (type, amount, category, date, description, userId) VALUES (?, ?, ?, ?, ?, ?)',
    [type, amount, category, date, description || '', USER_ID],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Update a transaction
router.put('/:id', (req, res) => {
  const { type, amount, category, date, description } = req.body;
  if (!type || !amount || !category || !date || !['income', 'expense'].includes(type)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  db.run(
    'UPDATE transactions SET type = ?, amount = ?, category = ?, date = ?, description = ? WHERE id = ? AND userId = ?',
    [type, amount, category, date, description || '', req.params.id, USER_ID],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (this.changes === 0) return res.status(404).json({ error: 'Transaction not found' });
      res.json({ message: 'Transaction updated' });
    }
  );
});

// Delete a transaction
router.delete('/:id', (req, res) => {
  db.run('DELETE FROM transactions WHERE id = ? AND userId = ?', [req.params.id, USER_ID], function (err) {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (this.changes === 0) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  });
});

module.exports = router;

