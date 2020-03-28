const express = require('express');
const path = require('path');
const connectDb = require('./config/connectDb');
const user = require('./routes/user');
const app = express();

app.use(express.json());
connectDb();

app.use('/', user);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname, 'client', 'build', 'index.html');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT} `)
);
