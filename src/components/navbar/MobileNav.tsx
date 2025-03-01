import { useEffect, useState } from "react";
import { Btn } from "../../styles/Btn";
import { AnimatePresence, motion } from "motion/react";
import { MenuBtn } from "./MenuBtn";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const [show, setShow] = useState(false);

  const ToggleShow = () => {
    setShow(!show);
  };

  // disable scrolling when show nav
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className="flex w-screen lg:hidden">
      <div className="absolute top-5 left-5 cursor-pointer">
        <Link to={"/"}>
          <img
            onClick={() => setShow(false)}
            className="h-10"
            src="./logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="ml-auto flex w-fit flex-col">
        <div className="z-100 m-2">
          <MenuBtn show={show} ToggleShow={ToggleShow} />
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                y: -100,
                rotateX: 100,
                height: "0",
                overflow: "hidden",
                opacity: 0,
              }}
              animate={{
                y: 0,
                rotateX: 0,
                height: "100%",
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              exit={{
                rotateX: 100,
                y: -100,
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-light absolute inset-0 z-10 flex h-screen w-screen flex-col backdrop-blur-2xl"
            >
              <div className="mt-20 flex h-full flex-col items-end gap-20 px-10">
                <nav className="text-dark flex flex-col gap-5 text-3xl">
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
                <Link to={"/signup"} onClick={ToggleShow}>
                  <Btn>Create Account</Btn>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
