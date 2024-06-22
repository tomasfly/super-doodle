const express = require('express');
const symbolController = require('../controllers/symbolController');

const router = express.Router();

// GET /symbol
router.get('/', symbolController.getSymbol);

module.exports = router;