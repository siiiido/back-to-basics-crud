import { model, Schema } from 'mongoose';

interface IBlog {
  title: string;
  content: string;
  date: Date;
}

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Blog = model<IBlog>('Blog', blogSchema);

export default Blog;
