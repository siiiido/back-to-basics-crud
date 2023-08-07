import React from 'react';

interface ButtonProps {
  bgColor: string;
  children: React.ReactNode;
}

export const Button = ({ bgColor, children }: ButtonProps) => (
  <button
    className={`${bgColor}/50 w-48 h-24 rounded-md text-xl hover:${bgColor} cursor-pointer transition duration-300 ease-in-out `}
  >
    {children}
  </button>
);
