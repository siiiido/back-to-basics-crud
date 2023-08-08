import React from 'react';

interface ButtonProps {
  hoverColor: string;
  bgColorOpacity: string;
  children: React.ReactNode;
}

export const Button = ({
  bgColorOpacity,
  hoverColor,
  children,
}: ButtonProps) => (
  <button
    className={`${bgColorOpacity} w-48 h-24 rounded-md text-xl ${hoverColor} cursor-pointer transition duration-300 ease-in-out `}
  >
    {children}
  </button>
);
