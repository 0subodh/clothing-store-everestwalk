const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch(() => {
    console.log('Connection failed');
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
