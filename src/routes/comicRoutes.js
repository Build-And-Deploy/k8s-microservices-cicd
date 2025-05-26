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

// GET single comic by id
router.get('/:id', async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new comic entry
router.post('/', (req, res) => {
    const newComic = new Comic(req.body);

    try {
        const savedComic = await.newComic.save();
        res.status(201).json(savedComic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a comic
router.put('/:id', (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a comic
router.delete('/:id', (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;