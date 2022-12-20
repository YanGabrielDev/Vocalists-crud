import { ReactNode } from "react";
import {ButtonHTMLAttributes} from 'react'
interface ButtonInterface{
  col?: string;
  children: ReactNode;
  className?:string,
  onClick?: () => void

} 
export const Button = ({ children, onClick, className, col }: ButtonInterface) => {
  const buttonColor = col ? col : 'gray'
  return (
    <div>

    <button className={
    `text-white bg-gradient-to-r
     from-${col}-400 
     to-${col}-800 px-4 py-2 rounded-md ${className}`}
     onClick={onClick}
    >
      {children}
    </button>
    </div>
  );
};
