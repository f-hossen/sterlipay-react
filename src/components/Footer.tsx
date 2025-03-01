import { Link } from "react-router-dom";
import BgImg from "../assets/images/footer-bg.svg";

export const Footer = () => {
  return (
    <div
      className="text-light bg-dark flex w-screen flex-col bg-center px-4 pt-10 text-sm lg:bg-cover lg:px-10"
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="mb-5 flex flex-col gap-2 lg:mb-0">
          <Link to={"/"}>
            <p className="cursor-pointer text-2xl">SteraPay</p>
          </Link>
          <p>Manage your finances</p>
        </div>

        <div className="flex justify-between lg:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="my-4 text-lg font-medium"> Company</p>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="my-4 text-lg font-medium"> Support</p>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="my-4 text-lg font-medium"> Legal</p>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
            <a>Lorem</a>
          </div>
        </div>
      </div>
      <p className="text-gray pt-10 text-left">© 2025 SterliPay</p>
    </div>
  );
};
