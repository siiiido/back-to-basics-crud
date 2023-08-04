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
router.get('/:_id', getBlogByTitle);
router.get('/', getAllBlogs);
router.put('/:_id', putBlogByTitle);
router.patch('/:_id', patchBlogByTitle);
router.delete('/:_id', removeBlogByTitle);

export default router;
