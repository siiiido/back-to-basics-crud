import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BlogInputTitle,
  BlogInputContent,
  BlogTitle,
} from '../components/UI/Blog';
import { FormButton } from '../components/UI/Button';

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (titleInputRef.current && contentInputRef.current) {
      const title: string = titleInputRef.current.value;
      const content: string = contentInputRef.current.value;
      try {
        const response = await fetch('http://localhost:5001/blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
          console.log(response, ' response');
          navigate('/');
        } else {
          console.error('Post request failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <BlogTitle title="Create Blog" />
        <form className="space-y-6">
          <BlogInputTitle ref={titleInputRef} />
          <BlogInputContent ref={contentInputRef} />
          <div className="flex justify-center">
            <FormButton
              handleSubmit={handleSubmit}
              title="Submit"
              url="/"
              bgColor="bg-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
