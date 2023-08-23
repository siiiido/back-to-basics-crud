import { Button, LinkButton } from './Button';
import { vi } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('Button Component', () => {
  it('renders the button with the provided title', () => {
    const title = 'Click me';
    render(<Button title={title} />);

    const buttonElement = screen.getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  it('passes additional props to the button element', () => {
    const onClickMock = vi.fn();

    render(<Button title="Click me" onClick={onClickMock} />);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();

    buttonElement.click();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

describe('LinkButton Component', () => {
  it('renders the button with correct title and link', () => {
    render(
      <BrowserRouter>
        <LinkButton to="/dashboard" title="Go to Dashboard" />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link', { name: 'Go to Dashboard' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/dashboard');
  });

  it('passes additional attributes to the link', () => {
    render(
      <BrowserRouter>
        <LinkButton
          to="/profile"
          title="Go to Profile"
          className="custom-button"
        />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link', { name: 'Go to Profile' });
    expect(linkElement).toHaveClass('custom-button');
  });
});
