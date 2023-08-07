import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogByTitle,
  putBlogByTitle,
  patchBlogByTitle,
  removeBlogByTitle,
} from '../controllers/blogController';

const router = express.Router();

router.post('/', createBlog);
router.get('/:id', getBlogByTitle);
router.get('/', getAllBlogs);
router.put('/:id', putBlogByTitle);
router.patch('/:id', patchBlogByTitle);
router.delete('/:id', removeBlogByTitle);

export default router;
