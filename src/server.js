// server.js
// Brendand Dileo, May 26 2025

const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const comicRoutes = require('./routes/comicRoutes');

const app = express();
const port = 3001;

connectDB();

app.use(cors());      
app.use(express.json());

app.use('/api/comics', comicRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});