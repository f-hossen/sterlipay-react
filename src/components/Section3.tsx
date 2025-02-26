import Card from "../assets/images/card.svg";
import { BtnLearnMore } from "../styles/Btn";
import { motion } from "motion/react";

import DeviceImg from "../assets/images/device.png";
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
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="mt-20 flex w-full">
        <div className="w-1/2">
          <img src={Card} alt="" />
        </div>
        <div className="ml-10 w-1/2">
          <span className="text-2xl font-extrabold">
            A simple savings account with no monthly fees and easy access.
          </span>
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
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="mt-20 flex w-full">
          <div className="ml-10 w-1/2">
            <span className="text-2xl font-extrabold">
              A simple savings account with no monthly fees and easy access.
            </span>
            <p className="my-8">
              Experience banking without the hassle. Our intuitive platform lets
              you manage your accounts, transfer funds, and pay bills with just
              a few taps. Your security is our priority. We employ cutting-edge
              encryption and multi-factor authentication to ensure your
              financial information is always safe and protected.
            </p>

            <BtnLearnMore />
          </div>
          <div className="w-1/2">
            <img src={DeviceImg} alt="" />
          </div>
        </div>
      </motion.div>

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
        viewport={{ once: true, amount: 0.8 }}
        className="mt-20 flex w-full"
      >
        <div className="w-1/2">
          <img src={InfoImg} alt="" />
        </div>
        <div className="ml-10 w-1/2">
          <span className="text-2xl font-extrabold">
            Smart Financial Insights at Your Fingertips
          </span>
          <p className="my-8">
            rack market trends, manage investments, and make smarter financial
            decisions with real-time insights
          </p>

          <BtnLearnMore />
        </div>
      </motion.div>
    </motion.div>
  );
};
