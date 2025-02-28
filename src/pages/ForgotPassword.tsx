import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BtnSecondary } from "../styles/Btn";

export const ForgotPassword = () => {
  return (
    <div className="from-secondary via-dark to-light flex min-h-screen w-screen items-center justify-center bg-gradient-to-br via-0% p-6">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-light/10 w-full max-w-md rounded-2xl p-8 shadow-lg backdrop-blur-lg"
      >
        {/* Header */}
        <h2 className="text-light mb-6 text-center text-3xl font-bold">
          Forgot Password
        </h2>

        {/* Instructions */}
        <p className="text-secondary mb-6 text-center text-sm">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-light block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="bg-light/20 focus:border-dark text-light mt-1 w-full rounded-lg border p-3 outline-none"
            />
          </div>

          {/* Submit Button */}
          <BtnSecondary className="hover:bg-light hover:text-dark text-light mt-4 w-full rounded-lg p-3 text-lg font-semibold transition duration-500">
            Send Reset Link
          </BtnSecondary>
        </form>

        {/* login link*/}
        <p className="text-secondary mt-4 text-center text-sm">
          Remember your password?
          <Link to="/login" className="text-light mx-1 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
