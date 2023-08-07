import { Button } from './components/UI/Button';

function App() {
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
