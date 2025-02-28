import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "motion/react";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";

const App = () => {
  const location = useLocation();
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
