import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import BlogLists from './pages/BlogLists';
import SpecificBlog from './pages/SpecificBlog';
import UpdateBlog from './pages/UpdateBlog';
import Error from './pages/Error';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    id: 'root',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'create-blog/:id',
        element: <CreateBlog />,
      },
      {
        path: 'blog-lists',
        element: <BlogLists />,
      },
      {
        path: 'specific-blog/:id',
        element: <SpecificBlog />,
      },
      {
        path: 'update-blog/:id',
        element: <UpdateBlog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
