import { forwardRef } from 'react';

type InputRef = HTMLInputElement;

const BlogInputTitle = forwardRef<InputRef>((props, ref) => {
  return (
    <div className="w-96 mt-7">
      <label htmlFor="title" className="block text-gray-800 font-bold mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="w-full border border-gray-300 p-2 rounded-lg"
        placeholder="Enter title"
        ref={ref}
      />
    </div>
  );
});

interface BlogInputTitleProps {
  value: string;
}

const BlogTitleRead = ({ value }: BlogInputTitleProps) => {
  return (
    <div className="w-96 mt-7">
      <label htmlFor="title" className="block text-gray-800 font-bold mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="w-full border border-gray-300 p-2 rounded-lg"
        value={value}
        readOnly
      />
    </div>
  );
};

type TextAreaRef = HTMLTextAreaElement;

const BlogInputContent = forwardRef<TextAreaRef>((props, ref) => {
  return (
    <div>
      <label htmlFor="content" className="block text-gray-800 font-bold mb-2">
        Content
      </label>
      <textarea
        id="content"
        name="content"
        rows="5"
        className="w-full border border-gray-300 p-2 rounded-lg"
        placeholder="Enter content"
        ref={ref}
      ></textarea>
    </div>
  );
});

interface BlogContentReadProps {
  value: string;
}

const BlogContentRead = ({ value }: BlogContentReadProps) => {
  return (
    <div>
      <label htmlFor="content" className="block text-gray-800 font-bold mb-2">
        Content
      </label>
      <textarea
        id="content"
        name="content"
        rows="5"
        className="w-full border border-gray-300 p-2 rounded-lg"
        value={value}
        readOnly
      ></textarea>
    </div>
  );
};

interface BlogTitleProps {
  title: string;
}

const BlogTitle = ({ title }: BlogTitleProps) => (
  <h1 className="text-3xl font-bold mb-4">{title}</h1>
);

export {
  BlogInputTitle,
  BlogInputContent,
  BlogTitle,
  BlogTitleRead,
  BlogContentRead,
};
