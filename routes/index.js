
const express = require('express');
const router = express.Router();
const data = require('../mock-api/db.json');

module.exports = router;

router.get('/stores', (req, res) => {
  res.json(data.stores);
});

router.get('/stores/:id', (req, res) => {
  res.json(data.stores.find(s => s.id === req.params.id));
});