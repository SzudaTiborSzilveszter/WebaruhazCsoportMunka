const express = require('express');
const router = express.Router();
const termekController = require('../controllers/TermekController');

router.get('/', termekController.getTermekek);
router.get('/:id', termekController.getTermek);

module.exports = router;