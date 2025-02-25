import React from "react";

interface MenuBtnProps {
  ToggleShow: () => void;
  show: boolean;
}

export const MenuBtn: React.FC<MenuBtnProps> = ({ ToggleShow, show }) => {
  return (
    <>
      <button
        className="relative z-50 ml-auto flex h-12 w-12 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg transition-colors duration-300 hover:bg-slate-50"
        onClick={ToggleShow}
        aria-label={show ? "Close menu" : "Open menu"}
      >
        <div className="relative flex w-7 flex-col items-end gap-1.5">
          {/* Top Line */}
          <span
            className={`h-0.5 rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${
              show
                ? "w-full translate-y-2 rotate-45"
                : "w-full origin-right delay-75"
            }`}
          ></span>
          {/* Middle Line */}
          <span
            className={`h-0.5 rounded-full bg-slate-800 transition-all duration-200 ${
              show ? "w-full opacity-0" : "w-3/4 origin-right delay-100"
            }`}
          ></span>
          {/* Bottom Line */}
          <span
            className={`h-0.5 rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${
              show
                ? "w-full -translate-y-2 -rotate-45"
                : "w-1/2 origin-right delay-150"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
};
