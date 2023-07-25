import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/connectDB';
import express from 'express';

const app = express();
const port: number = parseInt((process.env.PORT || 5001) as string, 10);

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
