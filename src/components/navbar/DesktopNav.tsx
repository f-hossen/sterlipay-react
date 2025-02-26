import { motion } from "motion/react";
import { Btn } from "../../styles/Btn";

export const DesktopNav = () => {
  return (
    <div className="hidden h-25 w-screen items-center bg-gray-200 md:flex">
      <div className="flex w-full justify-between px-10">
        <div className="cursor-pointer">
          <img className="absolute h-10" src="./logo.svg" alt="logo" />
        </div>

        <nav className="flex gap-10 text-xl text-black">
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
        <Btn>Create Account</Btn>
      </div>
    </div>
  );
};
