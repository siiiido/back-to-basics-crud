const BlogListSkeleton = () => {
  return (
    <div
      data-testid="blog-list-skeleton"
      className="flex justify-center items-center h-screen bg-slate-300"
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-1/2 h-5/6 overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Titles</h1>
        <ul className="space-y-4">
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="h-16 bg-gray-300 rounded w-full"></div>
        </ul>
      </div>
    </div>
  );
};

export default BlogListSkeleton;
