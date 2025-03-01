import { motion } from "motion/react";
import { Btn } from "../../styles/Btn";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <div className="text-dark z-10 hidden h-20 w-screen items-center backdrop-blur-3xl lg:flex">
      <div className="flex w-full justify-between px-10">
        <Link to={"/"}>
          <div className="cursor-pointer">
            <img className="absolute h-10" src="./logo.svg" alt="logo" />
          </div>
        </Link>

        <nav className="flex gap-10 text-xl">
          <motion.a
            className="cursor-pointer p-2 hover:text-green-800 hover:underline hover:underline-offset-8"
            whileHover={{
              x: [-2, 2, -2, 2, 0],
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
          >
            Contact
          </motion.a>
          <motion.a
            className="cursor-pointer p-2 hover:text-green-800 hover:underline hover:underline-offset-8"
            whileHover={{
              x: [-2, 2, -2, 2, 0],
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
          >
            Services
          </motion.a>
          <motion.a
            href="#about"
            className="cursor-pointer p-2 hover:text-green-800 hover:underline hover:underline-offset-8"
            whileHover={{
              x: [-2, 2, -2, 2, 0],
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
          >
            About
          </motion.a>
        </nav>
        <Link to={"/signup"}>
          <Btn>Create Account</Btn>
        </Link>
      </div>
    </div>
  );
};
