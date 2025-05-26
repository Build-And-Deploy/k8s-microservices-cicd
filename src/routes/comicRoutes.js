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
        if (!comic) return res.status(404).json({ message: 'Comic not found!' });
        res.status(200).json(comic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new comic entry
router.post('/', async (req, res) => {
    const newComic = new Comic(req.body);
    try {
        const savedComic = await newComic.save();
        res.status(201).json(savedComic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a comic
router.put('/:id', async (req, res) => {
    try {
        const updatedComic = await Comic.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedComic) return res.status(404).json({ message: 'Comic not found!' });
        res.status(200).json(updatedComic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a comic
router.delete('/:id', async (req, res) => {
    try {
        const deletedComic = await Comic.findByIdAndDelete(req.params.id);
        if (!deletedComic) return res.status(404).json({ message: 'Comic not found!' });
        res.status(200).json({ message: 'Comic deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;