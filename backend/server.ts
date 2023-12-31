import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/connectDB';
import express from 'express';
import { Request, Response } from 'express';
import router from './routes/blogsRouters';

const app = express();
const port: number = parseInt((process.env.PORT || 5001) as string, 10);

app.use(cors());

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/blog', router);

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
