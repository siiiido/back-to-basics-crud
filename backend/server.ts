import 'dotenv/config';
import app from './app';
import mongoose from 'mongoose';
import connectDB from './config/connectDB';

const port: number = parseInt((process.env.PORT || 5001) as string, 10);

connectDB();

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
