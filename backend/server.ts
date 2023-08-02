import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/connectDB';
import express from 'express';
import { createNewUser, printWord } from './controller/userController';
import { Request, Response } from 'express';
import { createNewNote } from './controller/noteController';
import {
  createMenu,
  findAll,
  findIsDine,
  findHotWater,
  findOneAndUpdateExam,
  findOneAnndReplaceExam,
} from './controller/menuController';

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

app.post('/menu', createMenu);
app.get('/menu', findAll);
app.get('/menu-isdine', findIsDine);
app.get('/menu-hot-water', findHotWater);
app.patch('/update-water', findOneAndUpdateExam);
app.put('/replace-menu', findOneAnndReplaceExam);

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
