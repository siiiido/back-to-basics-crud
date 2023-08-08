import { Link } from 'react-router-dom';
import React from 'react';

interface MainButtonProps {
  hoverColor: string;
  bgColorOpacity: string;
  url: string;
  children: React.ReactNode;
}

const MainButton = ({
  bgColorOpacity,
  hoverColor,
  url,
  children,
}: MainButtonProps) => (
  <Link
    to={url}
    className={`${bgColorOpacity} w-48 h-24 rounded-md text-xl ${hoverColor} cursor-pointer transition duration-300 ease-in-out flex justify-center items-center `}
  >
    {children}
  </Link>
);

interface FormButtons {
  title: string;
  url: string;
  bgColor: string;
}

const FormButton = ({ title, url, bgColor }: FormButtons) => (
  <Link
    type="submit"
    to={url}
    className={`w-[40%] rounded-3xl ${bgColor} px-6 py-2 text-xl font-medium uppercase text-white flex justify-center items-center`}
  >
    {title}
  </Link>
);

export { MainButton, FormButton };
