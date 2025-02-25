import { useState } from "react";
import { Btn } from "../styles/Btn";
import { MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "motion/react";

export const MobileNav = () => {
  const [show, setShow] = useState(false);

  const ToggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex md:hidden">
      <div className="cursor-pointer">
        <a href="/">
          <img
            onClick={ToggleShow}
            className="absolute m-5 h-10"
            src="./logo.svg"
            alt="logo"
          />
        </a>
      </div>

      <div className="flex w-full flex-col">
        <button className="m-5 ml-auto text-3xl" onClick={ToggleShow}>
          {show ? <MdClose /> : <BiMenu />}
        </button>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="bg-light inset-0 z-10 flex h-screen w-screen flex-col"
            >
              <div className="mt-20 flex h-full flex-col items-end gap-20 px-10">
                <nav className="flex flex-col gap-5 text-3xl text-black">
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer p-2 active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Contact
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer p-2 active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Services
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer p-2 active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    About
                  </motion.a>
                </nav>

                <Btn>Create Account</Btn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
