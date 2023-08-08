import React from 'react';

interface MainButtonProps {
  hoverColor: string;
  bgColorOpacity: string;
  children: React.ReactNode;
}

const MainButton = ({
  bgColorOpacity,
  hoverColor,
  children,
}: MainButtonProps) => (
  <button
    className={`${bgColorOpacity} w-48 h-24 rounded-md text-xl ${hoverColor} cursor-pointer transition duration-300 ease-in-out `}
  >
    {children}
  </button>
);

const FormButton = () => (
  <button
    type="submit"
    className="w-[40%] rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
  >
    Submit
  </button>
);

export { MainButton, FormButton };
