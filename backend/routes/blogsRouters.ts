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
router.get('/', getAllBlogs);
router.get('/:id', getBlogByTitle);
router.put('/:id', putBlogByTitle);
router.patch('/:id', patchBlogByTitle);
router.delete('/:title', removeBlogByTitle);

export default router;
