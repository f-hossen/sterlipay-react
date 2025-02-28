import { Link, useLocation } from "react-router-dom";
import { BtnSecondary } from "../styles/Btn";
import { motion } from "motion/react";
export const Hero = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 30,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      className="flex h-screen w-screen flex-col items-center justify-center gap-20"
    >
      <div className="flex h-[267px] w-[555px] flex-col items-center justify-center gap-5">
        <span className="bg-dark text-light rounded-md px-2 text-[14px] font-semibold">
          Enjoy 30% Extra Savings for 3 Months
        </span>
        <span className="text-[96px] font-extrabold">SterliPay</span>

        <span className="text[30px] font-extrabold">
          Your Money, Always in Your Control
        </span>
        <Link to={"/login"}>
          <BtnSecondary className="px-4 text-[40px] font-extrabold">
            Join & Save
          </BtnSecondary>
        </Link>
      </div>
      <div className="flex gap-15">
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
