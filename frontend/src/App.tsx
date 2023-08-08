import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import BlogLists from './pages/BlogLists';
import SpecificBlog from './pages/SpecificBlog';
import UpdateBlog from './pages/UpdateBlog';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'create-blog/',
    element: <CreateBlog />,
    errorElement: <Error />,
  },
  {
    path: 'blog-lists/',
    element: <BlogLists />,
    errorElement: <Error />,
  },
  {
    path: 'specific-blog/',
    element: <SpecificBlog />,
    errorElement: <Error />,
  },
  {
    path: 'update-blog/',
    element: <UpdateBlog />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
