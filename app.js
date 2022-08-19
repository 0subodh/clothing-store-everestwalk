const path = require('path');
const express = require('express');

const userRouter = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Testing middleware');
  next();
});

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
