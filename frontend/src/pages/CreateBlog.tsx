import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogTitle } from '../components/UI/Blog';
import { Button } from '../components/UI/Button';
import Input from '../components/UI/Input';
import TextArea from '../components/UI/TextArea';
import { isEmpty } from '../utils/validator';

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (titleInputRef.current && contentInputRef.current) {
      const title: string = titleInputRef.current.value;
      const content: string = contentInputRef.current.value;

      setIsError(isEmpty(title));
      setIsError(isEmpty(content));

      if (isError) return;
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
          <Input
            type="text"
            label="title"
            name="title"
            placeholder="Enter Title"
            ref={titleInputRef}
            error={isError}
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
              onClick={handleSubmit}
              title="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
