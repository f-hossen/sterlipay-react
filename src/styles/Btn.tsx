import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BtnProps {
  children: ReactNode;
  className?: string;
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

// allow customisation
export const BtnSecondary: React.FC<BtnProps> = ({
  children,
  className = "",
}) => {
  return (
    <>
      <button
        className={`bg-dark text-light active:text-dark active:bg-light w-fit cursor-pointer rounded-md p-1 transition-all duration-200 ease-in-out hover:underline ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export const BtnLearnMore = () => {
  return (
    <Link to={"/signup"}>
      <BtnSecondary className="px-2 text-sm lg:text-base">
        Learn more
      </BtnSecondary>
    </Link>
  );
};
