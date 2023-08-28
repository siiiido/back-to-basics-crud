import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import SpecificBlog from './SpecificBlog';
import DeleteConfirmModal from '../components/UI/DeleteConfirmModal';

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

  test('displays and closes modal', () => {
    const closeModalMock = vi.fn();
    const handleDeleteBlogMock = vi.fn();

    // Create a div element for the overlay-root container
    const overlayRoot = document.createElement('div');
    overlayRoot.setAttribute('id', 'overlay-root');
    document.body.appendChild(overlayRoot);

    render(
      <DeleteConfirmModal
        closeModal={closeModalMock}
        handleDeleteBlog={handleDeleteBlogMock}
      />
    );
  });

  test('displays Delete Confirm Modal when delete button is clicked', () => {
    const mockSpecificBlog = {
      _id: '123',
      title: 'Test Blog',
      content: 'Test Content',
      date: '2023-08-28',
    };

    render(<SpecificBlog />, {
      preloadedState: { specificBlog: mockSpecificBlog },
    });

    // Click the Delete button
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    // Check if the Delete Confirm Modal UI is displayed
    expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
    expect(screen.getByText(/no/i)).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
  });
});
