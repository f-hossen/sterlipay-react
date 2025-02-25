import { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
}

export const Btn: React.FC<BtnProps> = ({ children }) => {
  return (
    <>
      <button className="bg-dark text-light active:text-dark active:bg-light cursor-pointer p-1 transition-all duration-200 ease-in-out hover:underline">
        {children}
      </button>
    </>
  );
};

export const BtnSecondary: React.FC<BtnProps> = ({ children }) => {
  return (
    <>
      <button className="bg-dark text-light active:text-dark active:bg-light cursor-pointer rounded-md p-1 transition-all duration-200 ease-in-out hover:underline">
        {children}
      </button>
    </>
  );
};
