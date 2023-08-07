import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  putBlogById,
  patchBlogById,
  removeBlogById,
} from '../controllers/blogController';

const router = express.Router();

router.post('/', createBlog);
router.get('/:id', getBlogById);
router.get('/', getAllBlogs);
router.put('/:id', putBlogById);
router.patch('/:id', patchBlogById);
router.delete('/:id', removeBlogById);

export default router;
