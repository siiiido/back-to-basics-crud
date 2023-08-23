import { LinkButton } from '../components/UI/Button';

const Home = () => (
  <div className="grid grid-cols-5 grid-rows-5 gap-4 min-h-screen bg-slate-300">
    <div className="col-start-2 row-start-3 flex justify-center items-center ">
      <LinkButton
        className={`bg-indigo-500/50 w-48 h-24 rounded-md uppercase text-xl hover:bg-indigo-500 cursor-pointer transition duration-300 ease-in-out flex justify-center items-center `}
        to={'create-blog'}
        title="create"
      />
    </div>
    <div className="col-start-4 row-start-3 flex justify-center items-center">
      <LinkButton
        className={`bg-lime-600/50 w-48 h-24 rounded-md uppercase text-xl hover:bg-lime-600 cursor-pointer transition duration-300 ease-in-out flex justify-center items-center `}
        to={'blog-lists'}
        title="read"
      />
    </div>
  </div>
);

export default Home;
