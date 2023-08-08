const CreateBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Form</h1>
        <form className="space-y-6">
          <div className="w-96">
            <label
              htmlFor="title"
              className="block text-gray-800 font-bold mb-2"
            >
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
          <div>
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
              placeholder="Enter content"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
