import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Navbar />

      <div className="container flex flex-col items-center justify-center overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
