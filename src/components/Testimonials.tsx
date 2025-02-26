import { BsQuote } from "react-icons/bs";
import { motion } from "motion/react";

import Client1 from "../assets/images/client-1.jpg";
import Client2 from "../assets/images/client-2.jpg";
import Client3 from "../assets/images/client-3.jpg";
import Client4 from "../assets/images/Client-4.jpg";

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
      viewport={{ once: true, amount: 0.6 }}
      className="mt-20 flex flex-col gap-y-8"
    >
      <div className="flex items-center">
        <span className="w-1/2 text-2xl font-extrabold">
          Hear from Our Customers
        </span>
        <p className="text-gray w-1/2 text-xs">
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
        className="grid w-full grid-cols-2 gap-x-12"
      >
        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-20 w-20 rounded-full object-cover"
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
          <BsQuote className="text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-20 w-20 rounded-full object-cover"
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
        className="grid w-full grid-cols-2 gap-x-12"
      >
        <div className="mt-8 flex flex-col gap-5">
          <BsQuote className="text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-20 w-20 rounded-full object-cover"
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
          <BsQuote className="text-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
            placeat eos numquam nesciunt in vitae, necessitatibus magnam
            consequuntur dolore natus odit? Quos, consequatur.
          </p>
          <div className="flex gap-5">
            <img
              className="h-20 w-20 rounded-full object-cover"
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
