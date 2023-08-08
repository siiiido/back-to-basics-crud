const BlogTitle = () => {
  return (
    <div className="w-96">
      <label htmlFor="title" className="block text-gray-800 font-bold mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="w-full border border-gray-300 p-2 rounded-lg"
        placeholder="Enter title"
      />
    </div>
  );
};

const BlogContent = () => {
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
      ></textarea>
    </div>
  );
};

export { BlogContent, BlogTitle };
