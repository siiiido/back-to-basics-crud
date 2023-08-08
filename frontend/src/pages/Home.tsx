import { MainButton } from '../components/UI/Button';

const Home = () => (
  <div className="grid grid-cols-5 grid-rows-5 gap-4 min-h-screen bg-slate-300">
    <div className="col-start-2 row-start-3 flex justify-center items-center ">
      <MainButton
        bgColorOpacity="bg-indigo-500/50"
        hoverColor="hover:bg-indigo-500"
        url="create-blog/:id"
      >
        Create
      </MainButton>
    </div>
    <div className="col-start-4 row-start-3 flex justify-center items-center">
      <MainButton
        bgColorOpacity="bg-lime-600/50"
        hoverColor="hover:bg-lime-600"
        url="blog-lists"
      >
        Read
      </MainButton>
    </div>
  </div>
);

export default Home;
