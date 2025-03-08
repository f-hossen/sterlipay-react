import { Link } from "react-router-dom";
import { BtnSecondary } from "../styles/Btn";
import { motion } from "motion/react";
import { easeIn } from "motion";
import bg from "../assets/images/hero-bg.jpg";

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
      className="flex h-screen w-screen flex-col items-center justify-center gap-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="text-light flex h-[267px] w-[555px] flex-col items-center justify-center gap-5">
        <span className="bg-dark rounded-md px-2 text-[14px] font-semibold">
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
      <div className="text-light flex flex-col gap-15 lg:flex-row">
        <motion.div
          className="flex items-center gap-5"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: "easeIn",
          }}
        >
          <span className="text-[28px] font-extrabold first-letter:text-5xl">
            100K
          </span>
          <span className="text-[18px]">Active Users</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-5"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "easeIn",
          }}
        >
          <span className="text-[28px] font-extrabold first-letter:text-5xl">
            1M+
          </span>
          <span className="text-[18px]">Transactions Processed</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-5"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <span className="text-[28px] font-extrabold first-letter:text-5xl">
            5
          </span>
          <span className="text-[18px]">Years of Secure Banking</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
