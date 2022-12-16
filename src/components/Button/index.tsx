import { ReactNode } from "react";

interface ButtonInterface {
  col?: 'gray' | 'green' | 'blue';
  children: ReactNode;
  className?: string;
}
export const Button = ({ children, className, col }: ButtonInterface) => {
  const buttonColor = col ? col : 'gray'
  return (
    <div>

    <button className={
    `text-white bg-gradient-to-l 
     from-${buttonColor}-400 
     to-${buttonColor}-800 px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
    </div>
  );
};
