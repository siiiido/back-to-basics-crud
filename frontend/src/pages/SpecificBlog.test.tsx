import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import SpecificBlog from './SpecificBlog';

const testData = {
  _id: 'mockId',
  title: 'Mock Title',
  date: '2023-08-24',
  content: 'Mock Content',
};

const server = setupServer(
  rest.get('http://localhost:5001/blog/:id', (req, res, ctx) => {
    return res(ctx.json(testData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('SpecifcBlog Component', () => {
  test('renders skeleton while loading', () => {
    render(<SpecificBlog />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('blog-skeleton')).toBeInTheDocument();
  });

  test('renders specific blog after loading', async () => {
    render(<SpecificBlog />, { wrapper: MemoryRouter });

    await waitFor(() => {
      const input = screen.getByLabelText('title');
      expect((input as HTMLInputElement).value).toBe('Mock Title');

      const textArea = screen.getByLabelText('content');
      expect((textArea as HTMLTextAreaElement).value).toBe('Mock Content');

      expect(screen.getByText(/Specific Blog/i)).toBeInTheDocument();
    });
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('opens delete confirmation modal', async () => {
    render(<SpecificBlog />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText('Delete')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Delete'));

      expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    });
  });
});
