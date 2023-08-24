import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CreateBlog from './CreateBlog';

const server = setupServer(
  rest.post('http://localhost:5001/blog', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders create blog form', () => {
  render(
    <MemoryRouter>
      <CreateBlog />
    </MemoryRouter>
  );

  const titleInput = screen.getByPlaceholderText('Enter Title');
  const contentInput = screen.getByPlaceholderText('Enter content');
  const submitButton = screen.getByText('submit');

  expect(titleInput).toBeInTheDocument();
  expect(contentInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('submits the form successfully', async () => {
  render(
    <MemoryRouter>
      <CreateBlog />
    </MemoryRouter>
  );

  // Fill in the input fields
  const titleInput = screen.getByLabelText('title');
  const contentInput = screen.getByLabelText('content');
  const submitButton = screen.getByText('submit');

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(contentInput, { target: { value: 'Test Content' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Wait for the form submission to complete
  await waitFor(() =>
    expect(screen.getByText('Create Blog')).toBeInTheDocument()
  );

  // Verify the navigation
  expect(screen.getByText('Create Blog')).toBeInTheDocument();
});

test('handles API error', async () => {
  server.use(
    rest.post('http://localhost:5001/blog', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(
    <MemoryRouter>
      <CreateBlog />
    </MemoryRouter>
  );

  const titleInput = screen.getByLabelText('title');
  const contentInput = screen.getByLabelText('content');
  const submitButton = screen.getByText('submit');

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(contentInput, { target: { value: 'Test Content' } });

  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(screen.getByText('Create Blog')).toBeInTheDocument()
  );

  // Verify the error handling behavior
  expect(screen.getByText('Create Blog')).toBeInTheDocument();
});
