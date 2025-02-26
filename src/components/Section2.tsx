import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";
import Img3 from "../assets/images/3.jpg";

import { motion } from "motion/react";

export const Section2 = () => {
  return (
    <motion.div
      className="mt-30 flex flex-col"
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
      <div className="flex">
        <span className="w-2/2 text-2xl font-extrabold">
          Choose the Right Account for You
        </span>
        <p className="text-gray text-xs">
          All accounts are subject to eligibility criteria. Fees, limits, and
          benefits vary by account type.
        </p>
      </div>

      <div className="mt-20 flex justify-between">
        <img
          className="h-[250px] w-[170px] rounded-4xl object-cover"
          src={Img1}
          alt="image-1"
        />
        <img
          className="h-[250px] w-[170px] rounded-4xl object-cover"
          src={Img2}
          alt="image-2"
        />
        <img
          className="h-[250px] w-[170px] rounded-4xl object-cover"
          src={Img3}
          alt="image-3"
        />
      </div>
    </motion.div>
  );
};
