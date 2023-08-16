import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  placeholder: string;
  error?: boolean;
  value?: string | number;
  disabled?: boolean;
}

const Input: React.FC = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, placeholder, error, value, disabled, type = 'text' },
    ref
  ) => {
    return (
      <div className="w-96 mt-7">
        <label
          className="block text-gray-800 font-bold mb-2 uppercase"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg"
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          ref={ref}
        />
        {error && (
          <p className="text-red-500 text-sm font-semibold ml-3 mt-1">
            Input filed can't be empty!
          </p>
        )}
      </div>
    );
  }
);

export default Input;
