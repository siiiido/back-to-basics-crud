import { fireEvent } from '@testing-library/react';
import Input from './Input';
import { render, screen, userEvent } from '../../utils/test-utils';

describe('Input Component', async () => {
  it('renders without errors', () => {
    render(
      <Input label="Username" name="username" placeholder="Enter username" />
    );
  });

  it('displays label correctly', () => {
    render(
      <Input label="Username" name="username" placeholder="Enter username" />
    );
    const labelElement = screen.getByText('Username');
    expect(labelElement).toBeInTheDocument();
  });

  it('handles value changes', () => {
    render(
      <Input label="Username" name="username" placeholder="Enter username" />
    );

    const inputElement = screen.getByPlaceholderText('Enter username');
    fireEvent.change(inputElement, { target: { value: 'john_doe' } });

    expect(inputElement.value).toBe('john_doe');
  });

  it('does not display an error message by default', () => {
    render(
      <Input label="Username" name="username" placeholder="Enter username" />
    );

    const errorElement = screen.queryByText("Input field can't be empty!");
    expect(errorElement).not.toBeInTheDocument();
  });

  it('should render the input', () => {
    render(
      <Input
        name="email"
        type="email"
        error={undefined}
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />
    );
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      })
    ).toBeInTheDocument();
  });

  it('should change input value', async () => {
    render(
      <Input
        name="email"
        type="email"
        error={undefined}
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />
    );

    screen.logTestingPlaygroundURL();

    const input = screen.getByRole('textbox', {
      name: /email address/i,
    });
    expect(input).toBeInTheDocument();
    await userEvent.type(input, '1337');
    expect(input).toHaveValue('1337');
  });

  it('should render the input with error', () => {
    render(
      <Input
        name="email"
        type="email"
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />
    );
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      })
    ).toBeInTheDocument();
  });
});
