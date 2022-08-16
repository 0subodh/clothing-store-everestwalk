const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Testing middleware');
  next();
});

app.use('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'Hello world',
    },
  });
});

module.exports = app;
