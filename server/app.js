const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/OrderRoutes');

// app init
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Connect to MongoDB
connectDB();
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
