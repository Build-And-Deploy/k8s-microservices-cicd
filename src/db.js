// db.js
// Brendand Dileo, May 26 2025

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error('', err);
        process.exit(1);
    }
};

module.exports = connectDB;