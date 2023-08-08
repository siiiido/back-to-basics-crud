import {
  BlogInputTitle,
  BlogInputContent,
  BlogTitle,
} from '../components/UI/Blog';
import { FormButton } from '../components/UI/Button';

const CreateBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <BlogTitle title="Create Blog" />
        <form className="space-y-6">
          <BlogInputTitle />
          <BlogInputContent />
          <div className="flex justify-center">
            <FormButton title="Submit" bgColor="bg-black" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
