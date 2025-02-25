import { MobileNav } from "./components/navbar/MobileNav";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <MobileNav />
    </div>
  );
};

export default App;
