const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    if (mongoose.connection.readyState === 1) return next();
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase');
        next();
    } catch (err) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
