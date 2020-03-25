const express = require('express');

const connectDb = require('./config/connectDb');
const user = require('./routes/user');
const app = express();

app.use(express.json());
connectDb();

app.use('/', user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT} `)
);
