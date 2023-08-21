const BlogSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="animate-pulse">
          <div className="h-10 w-64 bg-gray-300 rounded mb-4"></div>
          <div className="h-40 w-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
