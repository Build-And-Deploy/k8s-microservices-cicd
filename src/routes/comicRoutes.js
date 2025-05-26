// comicRoutes.js
// Brendan Dileo, May 26 2025

const express = require('express');
const Comic = require('../models/Comic');

const router = express.Router();

// GET all comics
router.get('/', async (req, res) => {
    try {
        const comics = await Comic.find();
        res.status(200).json(comics);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single comic
router.get('/:id', (req, res) => {
});

// Create a new comic entry
router.post('/', (req, res) => {
});

// Update a comic
router.put('/:id', (req, res) => {
});

// Delete a comic
router.delete('/:id', (req, res) => {
});

module.exports = router;





