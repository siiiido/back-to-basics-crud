import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/connectDB';
import express from 'express';
import { createNewUser, printWord } from './controller/userController';
import { Request, Response } from 'express';
import { createNewNote } from './controller/noteController';

const app = express();
const port: number = parseInt((process.env.PORT || 5001) as string, 10);

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user', printWord);

app.post('/user', createNewUser);

app.post('/new-note', createNewNote);

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
