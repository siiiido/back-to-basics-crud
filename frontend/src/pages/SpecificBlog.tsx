import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteConfirmModal from '../components/UI/DeleteConfirmModal';
import { BlogTitle } from '../components/UI/Blog';
import { Button, LinkButton } from '../components/UI/Button';
import Input from '../components/UI/Input';
import TextArea from '../components/UI/TextArea';
import BlogSkeleton from '../components/UI/BlogSkeleton';

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
    return <BlogSkeleton />;
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
            <Input
              type="text"
              label="title"
              name="title"
              placeholder="Enter Title"
              disabled={true}
              value={specificBlog.title}
            />
            <TextArea
              label="content"
              name="content"
              rows={5}
              placeholder="Enter content"
              disabled={true}
              value={specificBlog.content}
            />
          </form>
          <div className="flex justify-between pt-6">
            <LinkButton
              buttonStyle={`w-[40%] rounded-3xl bg-blue-500 px-6 py-2 text-xl font-medium uppercase text-white flex justify-center items-center`}
              to={`/update-blog/${id}`}
            >
              Edit
            </LinkButton>
            <Button
              buttonStyle={`w-[40%] rounded-3xl bg-red-500 px-6 py-2 text-xl font-medium uppercase text-white flex justify-center items-center`}
              onClick={openModal}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificBlog;
