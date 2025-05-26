// Comic.js
// Brendand Dileo, May 26 2025

const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
    title: {type: String, required: true },
    author: String,
    genre: String,
    volume: Number,
    issue: Number,
    publishedDate: Date,
    summary: String,
}, { timestamps: true });

module.exports = mongoose.model('Comic', ComicSchema);