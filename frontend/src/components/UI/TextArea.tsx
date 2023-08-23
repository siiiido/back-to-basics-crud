import { forwardRef } from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  error?: boolean;
  value?: string | number;
  disabled?: boolean;
  rows: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, name, placeholder, error, value, disabled, rows }, ref) => {
    return (
      <div>
        <label
          htmlFor={label}
          className="block text-gray-800 font-bold mb-2 uppercase"
        >
          {label}
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg"
          id={label}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          value={value}
          ref={ref}
        />
        {error && (
          <p className="text-red-500 text-sm font-semibold ml-3 mt-1">
            Textarea filed can't be empty!
          </p>
        )}
      </div>
    );
  }
);

export default TextArea;
