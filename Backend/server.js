const express = require('express');

const connectDb = require('./config/connectDb');

const app = express();

connectDb();
const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT} `)
);
