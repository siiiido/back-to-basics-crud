import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Blog {
  id: string;
  title: string;
  date: string;
  content: string;
}

const BlogLists: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogLists = async () => {
      try {
        const response = await fetch('http://localhost:5001/blog', {
          method: 'GET',
        });

        if (response.ok) {
          const responseData = await response.json();
          setBlogs(responseData.reverse());
        } else {
          console.error('Failed to get data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getBlogLists();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="bg-white p-10 rounded-lg shadow-lg w-1/2 h-5/6 overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Titles</h1>
        <ul className="space-y-4">
          {blogs.map((blogData, index) => (
            <Link
              key={index}
              to={`/specific-blog/${blogData.id}`}
              className="text-lg truncate text-gray-800 bg-gray-100 p-4 block cursor-pointer"
            >
              {blogData.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogLists;
