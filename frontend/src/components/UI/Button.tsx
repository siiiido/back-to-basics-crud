import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return <button {...rest}>{title}</button>;
};

const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string;
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  to: string;
}

const LinkButton = ({ to, title, ...rest }: LinkButtonProps) => {
  return (
    <Link to={to} {...rest}>
      {title}
    </Link>
  );
};

export { Button, LinkButton, ButtonWrapper };
