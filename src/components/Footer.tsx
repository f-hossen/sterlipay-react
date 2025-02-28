import { Link } from "react-router-dom";
import BgImg from "../assets/images/footer-bg.svg";

export const Footer = () => {
  return (
    <div
      className="text-light bg-dark flex w-full flex-col bg-cover bg-center px-10 pt-10 text-sm"
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <Link to={"/"}>
            <p className="cursor-pointer text-2xl">SteraPay</p>
          </Link>
          <p>Manage your finances</p>
        </div>

        <div className="flex w-1/2 justify-between">
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
