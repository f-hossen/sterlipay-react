import { BsQuote } from "react-icons/bs";
import { motion } from "motion/react";

import Client1 from "../assets/images/client-1.jpg";
import Client2 from "../assets/images/client-2.jpg";
import Client3 from "../assets/images/client-3.jpg";
import Client4 from "../assets/images/client-4.jpg";

export const Testimonials = () => {
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
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 flex flex-col gap-y-8 text-sm lg:text-base"
    >
      <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left">
        <p className="text-xl font-extrabold lg:w-1/2 lg:text-2xl">
          Hear from Our Customers
        </p>
        <p className="text-gray text-xs lg:w-1/2 lg:text-sm">
          Discover how our users benefit from seamless banking and real-time
          insights
        </p>
      </div>

      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          opacity: {
            duration: 1.5,
            ease: "easeIn",
          },
          x: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="grid w-full gap-y-5 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0"
      >
        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text:base lg:text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-12 w-12 rounded-full object-cover lg:h-20 lg:w-20"
              src={Client1}
              loading="lazy"
              alt="Client image"
            />
            <div className="flex flex-col justify-center">
              <p>Lorem Ipsum</p>
              <p className="text-gray">Freelancer</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text:base lg:text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-12 w-12 rounded-full object-cover lg:h-20 lg:w-20"
              src={Client2}
              loading="lazy"
              alt="Client image"
            />
            <div className="flex flex-col justify-center">
              <p>Lorem Ipsum</p>
              <p className="text-gray">Freelancer</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          opacity: {
            duration: 1.5,
            ease: "easeIn",
          },
          x: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="grid w-full gap-x-12 lg:grid-cols-2"
      >
        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text:base lg:text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-12 w-12 rounded-full object-cover lg:h-20 lg:w-20"
              src={Client3}
              loading="lazy"
              alt="Client image"
            />
            <div className="flex flex-col justify-center">
              <p>Lorem Ipsum</p>
              <p className="text-gray">Freelancer</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text:base lg:text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-12 w-12 rounded-full object-cover lg:h-20 lg:w-20"
              src={Client4}
              loading="lazy"
              alt="Client image"
            />
            <div className="flex flex-col justify-center">
              <p>Lorem Ipsum</p>
              <p className="text-gray">Freelancer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
