import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteConfirmModal from '../components/UI/DeleteConfirmModal';

import {
  BlogContentRead,
  BlogTitleRead,
  BlogTitle,
} from '../components/UI/Blog';
import { FormButton } from '../components/UI/Button';

interface Blog {
  _id: string;
  title: string;
  date: string;
  content: string;
}

const SpecificBlog = () => {
  const [specificBlog, setSpecificBlog] = useState<Blog | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [isDeleteBlog, setIsDeleteBlog] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleDeleteBlog = () => {
    setIsDeleteBlog(true);
  };

  useEffect(() => {
    const getBlogById = async () => {
      try {
        const response = await fetch(`http://localhost:5001/blog/${id}`, {
          method: 'GET',
        });

        if (response.ok) {
          const responseData = await response.json();
          setSpecificBlog(responseData);
        } else {
          console.error('Failed to get blog data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getBlogById();
  }, []);

  const deleteBlog = async () => {
    const response = await fetch(`http://localhost:5001/blog/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const responseData = await response.json();

      console.log(responseData, ' responseData');
      navigate('/blog-lists');
    } else {
      console.error('Failed');
    }
  };

  if (isDeleteBlog) {
    deleteBlog();
  }

  if (!specificBlog) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {open && (
        <DeleteConfirmModal
          closeModal={closeModal}
          handleDeleteBlog={handleDeleteBlog}
        />
      )}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <BlogTitle title="Specific Blog" />
          <form className="space-y-6">
            <BlogTitleRead value={specificBlog.title} />
            <BlogContentRead value={specificBlog.content} />
          </form>
          <div className="flex justify-between pt-6">
            <FormButton
              title="Edit"
              url={`/update-blog/:id`}
              bgColor="bg-blue-500"
            />
            {/* <FormButton url="/" title="Delete" bgColor="bg-red-500" /> */}
            <button className="bg-red-500" onClick={openModal}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificBlog;
