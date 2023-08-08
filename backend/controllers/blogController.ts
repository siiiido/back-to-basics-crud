import { Request, Response } from 'express';
import Blog from '../models/Blog';

const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: '400 Error' });
    }

    const blog = await Blog.create({
      title,
      content,
      date: new Date().toLocaleString(),
    });

    if (blog) {
      console.log(blog);
      res.status(200).json({ message: '200 OK' });
    } else {
      res.status(400).json({ message: '400 Error' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const allBlogs = await Blog.find();

    if (!allBlogs) return res.status(404).json({ message: 'Blogs not found' });

    console.log(allBlogs, ' allBlogs');
    return res.status(200).json(allBlogs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Inernal server error' });
  }
};

const getBlogById = async (req: Request, res: Response) => {
  // Route path: /users/:userId/books/:bookId

  // http://localhost:5001/blog/64cc5278253e69fd1c7794e5
  // req.params: { "id": "64cc5278253e69fd1c7794e5" }
  const { id } = req.params;

  try {
    const blog = await Blog.findOne({ _id: id }).exec();

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    return res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// replace entirely
const putBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) res.status(404).json({ message: 'Blog not found' });

  try {
    const replacedBlog = await Blog.findOneAndReplace(
      { _id: id },
      { title, content, date: new Date().toLocaleString() },
      { new: true }
    );

    if (!replacedBlog)
      return res.status(400).json({ message: 'Blog not found' });

    return res.json(replacedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const patchBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content)
    return res.status(404).json({ message: 'Blog not found' });

  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: id },
      { title, content, date: new Date().toLocaleString() },
      { new: true }
    );

    if (!updatedBlog)
      return res.status(404).json({ message: 'Blog not found' });

    return res.json(updatedBlog);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const removeBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ message: 'Title not found' });

    const deletedBLog = await Blog.findOneAndDelete({ _id: id });

    if (!deletedBLog) return res.status(401).json({ message: 'Error' });

    return res.status(200).json(deletedBLog);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Internal server error ' });
  }
};

export {
  createBlog,
  getAllBlogs,
  getBlogById,
  putBlogById,
  patchBlogById,
  removeBlogById,
};
