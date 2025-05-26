// Comic.js
// Brendand Dileo, May 26 2025

const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
    title: {type: String, required: true },
})