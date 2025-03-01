import { Link } from "react-router-dom";
import { BtnSecondary } from "../styles/Btn";
import { motion } from "motion/react";
import { easeIn } from "motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: easeIn,
      }}
      className="flex h-screen w-screen flex-col items-center justify-center gap-20"
    >
      <div className="flex h-[267px] w-[555px] flex-col items-center justify-center gap-5">
        <span className="bg-dark text-light rounded-md px-2 text-[14px] font-semibold">
          Enjoy 30% Extra Savings for 3 Months
        </span>
        <span className="text-4xl font-extrabold lg:text-[96px]">
          SterliPay
        </span>

        <span className="text[30px] font-extrabold">
          Your Money, Always in Your Control
        </span>
        <Link to={"/login"}>
          <BtnSecondary className="px-4 text-xl font-extrabold lg:text-[40px]">
            Join & Save
          </BtnSecondary>
        </Link>
      </div>
      <div className="flex flex-col gap-15 lg:flex-row">
        <div className="flex items-center gap-5">
          <span className="text-[28px] font-extrabold">100K</span>
          <span className="text-[18px]">Active Users</span>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-[28px] font-extrabold">1M+</span>
          <span className="text-[18px]">Transactions Processed</span>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-[28px] font-extrabold">5</span>
          <span className="text-[18px]">Years of Secure Banking</span>
        </div>
      </div>
    </motion.div>
  );
};
