const express = require('express');
const {
    getMonths,
    getMonth,
    createMonth,
    deleteMonth,
    updateMonth
} = require('../controllers/monthController');

const router = express.Router();

// GET all months
router.get('/', getMonths);

// GET a single month
router.get('/:id', getMonth);

// POST a new month
router.post('/', createMonth);

// DELETE a month
router.delete('/:id', deleteMonth);

// UPDATE a month
router.patch('/:id', updateMonth);

module.exports = router;