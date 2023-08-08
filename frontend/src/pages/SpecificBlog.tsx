import {
  BlogInputContent,
  BlogInputTitle,
  BlogTitle,
} from '../components/UI/Blog';
import { FormButton } from '../components/UI/Button';

const SpecificBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <BlogTitle title="Specific Blog" />
        <form className="space-y-6">
          <BlogInputTitle />
          <BlogInputContent />
        </form>
        <div className="flex justify-between pt-6">
          <FormButton
            title="Edit"
            url={`/update-blog/:id`}
            bgColor="bg-blue-500"
          />
          <FormButton url="/" title="Delete" bgColor="bg-red-500" />
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
