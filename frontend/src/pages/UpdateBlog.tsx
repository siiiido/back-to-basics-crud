import { BlogTitle, BlogContent } from '../components/UI/Blog';
import { FormButton } from '../components/UI/Button';

const UpdateBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <form className="space-y-6">
          <BlogTitle />
          <BlogContent />
          <div className="flex justify-center">
            <FormButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
