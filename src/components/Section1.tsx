import { BtnLearnMore } from "../styles/Btn";
import StarIcon from "../assets/images/star-icon.svg";
import { motion } from "motion/react";

export const Section1 = () => {
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
      viewport={{ once: true, amount: 0.5 }}
      className="mt-20 flex h-fit w-full flex-col items-center gap-10 lg:flex-row lg:gap-0"
    >
      <div className="flex w-full flex-col gap-8 lg:w-1/2">
        <span className="text-center text-lg font-extrabold lg:text-left lg:text-2xl">
          Banking Made Simple, Savings Made Easy
        </span>

        <p>
          Our banking platform is designed to help you save more, spend smarter,
          and manage your finances effortlessly. Enjoy security, flexibility,
          and exclusive rewards, all in one place. With instant access,
          automated savings, and real-time insights
        </p>

        <BtnLearnMore />
      </div>

      <div className="flex flex-col gap-8 lg:ml-10 lg:w-1/2">
        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Transactions</span>
            <p>
              Make instant payments and transfers with ease, anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Secure</span>
            <p>
              Your money and data are safeguarded with top-tier encryption and
              security measures.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
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
