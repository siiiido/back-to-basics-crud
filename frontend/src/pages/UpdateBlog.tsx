import { BlogTitle } from '../components/UI/Blog';
import { LinkButton } from '../components/UI/Button';
import Input from '../components/UI/Input';
import TextArea from '../components/UI/TextArea';

const UpdateBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <BlogTitle title="Update Blog" />
        <form className="space-y-6">
          <Input
            type="text"
            label="title"
            name="title"
            placeholder="Enter Title"
          />
          <TextArea
            label="content"
            name="content"
            rows={5}
            placeholder="Enter content"
          />
          <div className="flex justify-center">
            <LinkButton
              buttonStyle={`w-[40%] rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white flex justify-center items-center`}
              to={'/'}
            >
              update
            </LinkButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
