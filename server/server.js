// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/images');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/images', imageRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
