import { useEffect, useState } from 'react';
import { Button } from './components/UI/Button';

function App() {
  const [blogsState, setBlogState] = useState();

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5001/blog', {
          method: 'GET',
        });
        const responseData = await response.json();

        setBlogState(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlogs();
  }, []);

  if (blogsState) {
    console.log(blogsState);
  }

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 min-h-screen bg-slate-300">
      <div className="col-start-2 row-start-3 flex justify-center items-center">
        <Button bgColor="bg-indigo-500">Create</Button>
      </div>
      <div className="col-start-4 row-start-3 flex justify-center items-center">
        <Button bgColor="bg-lime-600">Read</Button>
      </div>
    </div>
  );
}

export default App;
