// server.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes.js/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${3001}`);
});
