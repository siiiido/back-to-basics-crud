import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogTitle } from '../components/UI/Blog';
import { Button } from '../components/UI/Button';
import Input from '../components/UI/Input';
import TextArea from '../components/UI/TextArea';
import BlogSkeleton from '../components/UI/BlogSkeleton';
import { isEmpty } from '../utils/validator';

const UpdateBlog: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getBlogById = async () => {
      try {
        const response = await fetch(`http://localhost:5001/blog/${id}`, {
          method: 'GET',
        });
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData, ' responseData');
          setIsLoading(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getBlogById();
  }, []);

  const handleInputChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (titleInputRef.current && contentInputRef.current) {
      const title: string = titleInputRef.current.value;
      const content: string = contentInputRef.current.value;

      setIsError(isEmpty(title));
      setIsError(isEmpty(content));

      if (isError) return;

      try {
        const response = await fetch(`http://localhost:5001/blog/${id}`, {
          method: 'PUT',
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

  if (isLoading) {
    setIsLoading(false);
    return <BlogSkeleton />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <BlogTitle title="Update Blog" />
        <form className="space-y-6">
          <Input
            type="text"
            label="title"
            name="title"
            placeholder="Enter Title"
            error={isError}
            ref={titleInputRef}
          />
          <TextArea
            label="content"
            name="content"
            rows={5}
            placeholder="Enter content"
            ref={contentInputRef}
            error={isError}
          />
          <div className="flex justify-center">
            <Button
              className={`w-[40%] rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white flex justify-center items-center`}
              onClick={handleInputChange}
              title="update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
