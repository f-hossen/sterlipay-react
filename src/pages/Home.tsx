import { Cta } from "../components/Cta";
import { Hero } from "../components/Hero";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Testimonials } from "../components/Testimonials";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <motion.div
      key={location.pathname}
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
      className="container flex w-screen flex-col items-center justify-center px-4"
    >
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Cta />
    </motion.div>
  );
};
