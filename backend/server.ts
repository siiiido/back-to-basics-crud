import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/connectDB';
import express from 'express';
import { Request, Response } from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogByTitle,
  putBlogByTitle,
  patchBlogByTitle,
  removeBlogByTitle,
} from './controller/blogController';

const app = express();
const port: number = parseInt((process.env.PORT || 5001) as string, 10);

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/blog', createBlog);
app.get('/blog', getAllBlogs);
app.get('/blog/:title', getBlogByTitle);
app.put('/blog/:id', putBlogByTitle);
app.patch('/blog/:id', patchBlogByTitle);
app.delete('/blog/:title', removeBlogByTitle);

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`'Start Server' on ${port}`);
  });
});

mongoose.connection.on('error', () => {
  console.log('error on connect');
});
