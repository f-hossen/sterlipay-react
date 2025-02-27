import { BtnSecondary } from "../styles/Btn";
import ArrowDown from "../assets/images/arrow-down.svg";
import { motion } from "motion/react";
export const Cta = () => {
  return (
    <div className="from-light to-dark mt-20 flex h-[200px] w-full flex-col items-center justify-center gap-5 rounded-sm bg-gradient-to-r">
      <p className="text-light text-2xl font-bold">Join thousands of users</p>
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

      <BtnSecondary className="bg-secondary text-subtle rounded-xl px-10 text-2xl shadow-[5px_10px_0px_rgba(0,0,0,0.3)]">
        Sign Up & Take Control
      </BtnSecondary>
    </div>
  );
};
