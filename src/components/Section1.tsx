import { BtnLearnMore } from "../styles/Btn";
import StarIcon from "../assets/images/start-icon.svg";

import { motion } from "motion/react";

export const Section1 = () => {
  return (
    <motion.div
      className="flex h-fit w-full"
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
      <div className="flex w-1/2 flex-col gap-8">
        <span className="text-2xl font-extrabold">
          Banking Made Simple, Savings Made Easy
        </span>

        <p>
          Our banking platform is designed to help you save more, spend smarter,
          and manage your finances effortlessly. Enjoy security, flexibility,
          and exclusive rewards—all in one place. With instant access, automated
          savings, and real-time insights
        </p>

        <BtnLearnMore />
      </div>

      <div className="ml-10 flex w-1/2 flex-col gap-8">
        <div className="flex gap-5">
          <img className="h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Transactions</span>
            <p>
              Make instant payments and transfers with ease, anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Secure</span>
            <p>
              Your money and data are safeguarded with top-tier encryption and
              security measures.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Rewards</span>
            <p>
              Enjoy cashback, discounts, and special offers tailored to your
              spending habits.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
