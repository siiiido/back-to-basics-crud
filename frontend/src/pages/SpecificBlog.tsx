const SpecificBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-800 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 p-2 rounded-lg"
            readOnly
            value={'Title'}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-800 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            readOnly
            value={'Content'}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button className="w-32 rounded-3xl bg-blue-500 px-6 py-2 text-xl font-medium uppercase text-white mr-2">
            Edit
          </button>
          <button className="w-32 rounded-3xl bg-red-500 px-6 py-2 text-xl font-medium uppercase text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
