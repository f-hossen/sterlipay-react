import Card from "../assets/images/card.svg";
import { BtnLearnMore } from "../styles/Btn";
import { motion } from "motion/react";

import DeviceImg from "../assets/images/device.svg";
import InfoImg from "../assets/images/info.svg";

export const Section3 = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* card  */}
      <div className="mt-20 flex w-full flex-col items-center gap-5 px-6 lg:flex-row lg:items-start lg:px-0">
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
          <img className="" src={Card} alt="" />
        </div>
        <div className="lg:ml-10 lg:w-1/2">
          <p className="text-center text-lg font-extrabold md:text-left lg:block lg:text-2xl">
            A simple savings account with no monthly fees and easy access.
          </p>
          <p className="my-8">
            Experience banking without the hassle. Our intuitive platform lets
            you manage your accounts, transfer funds, and pay bills with just a
            few taps. Your security is our priority. We employ cutting-edge
            encryption and multi-factor authentication to ensure your financial
            information is always safe and protected.
          </p>

          <BtnLearnMore />
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="mt-20 flex flex-col lg:flex-row lg:gap-10">
          <div className="px-6 lg:w-1/2 lg:px-0">
            <span className="text-lg font-extrabold lg:text-2xl">
              Take Control of Your Finances with Ease
            </span>
            <p className="my-8">
              Manage your money like a pro with SterliPay. Track your income,
              monitor expenses, and set savings goals—all in one place. With
              real-time insights and a sleek interface, financial freedom is
              just a tap away.
            </p>

            <BtnLearnMore />
          </div>

          {/* device img */}
          <div className="mt-10 flex w-screen justify-end lg:static lg:mt-0 lg:w-1/2 lg:py-0">
            <motion.img
              className="md:h-80 lg:h-auto"
              src={DeviceImg}
              alt=""
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "anticipate",
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* info */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 flex w-full flex-col lg:mt-20 lg:flex-row"
      >
        <div className="w-full lg:w-1/2">
          <img src={InfoImg} alt="" />
        </div>
        <div className="px-6 lg:ml-10 lg:w-1/2 lg:px-0">
          <span className="text-lg font-extrabold lg:text-2xl">
            Smart Financial Insights at Your Fingertips
          </span>
          <p className="my-8">
            Track market trends, manage investments, and make smarter financial
            decisions with real-time insights.
          </p>

          <BtnLearnMore />
        </div>
      </motion.div>
    </motion.div>
  );
};
