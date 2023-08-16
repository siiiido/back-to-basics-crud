import { Link } from 'react-router-dom';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  buttonStyle: string;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC = ({
  buttonStyle,
  onClick,
  children,
  type = 'button',
}: ButtonProps) => {
  return (
    <button className={buttonStyle} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

interface LinkButtonProps extends ButtonProps {
  to: string;
}

const LinkButton: React.FC = ({
  to,
  buttonStyle,
  onClick,
  children,
  type = 'button',
}: LinkButtonProps) => {
  return (
    <Link className={buttonStyle} to={to} onClick={onClick} type={type}>
      {children}
    </Link>
  );
};

export { Button, LinkButton };
