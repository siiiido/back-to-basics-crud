import { render, screen, waitFor } from '../utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import BlogLists from './BlogLists';

const getTestData = [
  {
    _id: '1',
    title: 'Test Blog 1',
    date: '2023-08-24',
    content: 'Test content 1',
  },
  {
    _id: '2',
    title: 'Test Blog 2',
    date: '2023-08-23',
    content: 'Test content 2',
  },
];

const server = setupServer(
  rest.get('http://localhost:5001/blog', (req, res, ctx) => {
    return res(ctx.json(getTestData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Test BlogLists Component', () => {
  test('renders blog titles correctly', async () => {
    render(
      <MemoryRouter>
        <BlogLists />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Blog 1')).toBeInTheDocument();
      expect(screen.getByText('Test Blog 2')).toBeInTheDocument();
    });
  });

  // Test skeleton UI when no blogs are avatilable
  test('renders skeleton when no blogs are avatilable', async () => {
    server.use(
      rest.get('http://localhost:5001/blog', (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    render(
      <MemoryRouter>
        <BlogLists />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('blog-list-skeleton')).toBeInTheDocument();
    });
  });

  // Test only skeleton UI
  test('renders skeleton while loading', () => {
    render(<BlogLists />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('blog-list-skeleton')).toBeInTheDocument();
  });
});
