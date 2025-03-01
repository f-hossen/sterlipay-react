import { BtnSecondary } from "../styles/Btn";
import ArrowDown from "../assets/images/arrow-down.svg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
export const Cta = () => {
  return (
    <div className="from-light to-light via-gray/15 mt-20 flex h-[300px] w-full flex-col items-center justify-center gap-5 bg-gradient-to-r via-50%">
      <p className="text-gray/50 flex text-xl font-extrabold lg:text-4xl">
        {/* <p className="text-light flex text-xl font-extrabold lg:text-4xl"> */}
        Join thousands of users
      </p>
      <motion.img
        src={ArrowDown}
        alt="Arrow Down"
        className="h-6"
        whileInView={{ y: [0, 10, 0] }}
        viewport={{ amount: 0.9 }}
        transition={{
          duration: 0.9,
          repeat: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <Link to={"/signup"}>
        <BtnSecondary className="bg-secondary text-subtle rounded-xl px-5 shadow-[5px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[10px_10px_0px_rgba(0,0,0,0.8)] active:shadow-[10px_10px_0px_rgba(0,0,0,0.8)] lg:text-2xl">
          Sign Up & Take Control
        </BtnSecondary>
      </Link>
    </div>
  );
};
