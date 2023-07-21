import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import NavigationButtons from "@/shared/NavigationButtons";
import { SelectedPage } from "@/shared/Types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <>
      <div
        className={` fixed top-0 left-0 z-10 flex  w-full items-center justify-between py-6 ${
          isTopOfPage ? "" : "bg-primary-100 DropShadow"
        }`}
      >
        <div className=" mx-auto flex w-5/6 justify-between ">
          <div className="flex items-center justify-between gap-16">
            <img src={Logo} className="z-40 " alt="Logo" />
            <div className="hidden items-center gap-8 md:flex">
              <NavigationButtons
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
          <div className="hidden items-center justify-between gap-8 md:flex">
            <h1>Sign in</h1>
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a Member
            </ActionButton>
          </div>
          {/* Mobile Version */}
          {/* Button show pop up */}
          <div
            onClick={() => setIsShowed((prev) => !prev)}
            className=" z-40 flex h-10 w-10 cursor-pointer flex-col items-center justify-center space-y-1 rounded-full bg-secondary-500 transition duration-150 hover:opacity-80 md:hidden"
          >
            <div
              className={`h-[2px] w-3/4 bg-white transition duration-150 ${
                isShowed ? "translate-y-1 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-[2px] w-3/4 bg-white transition duration-150 ${
                isShowed ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`h-[2px] w-3/4 bg-white transition duration-150 ${
                isShowed ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
        {/* overlay */}
        {isShowed && (
          <div className="fixed top-0 bottom-0 left-0 right-0 min-h-screen   bg-black opacity-60 "></div>
        )}
      </div>

      {/* Popup */}
      {isShowed && (
        <motion.div
          animate={{
            y: "-55%",
            scale: 1,
          }}
          initial={{
            y: "-400%",
            x: "-50%",
            scale: 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
          }}
          className="w-5xl fixed top-1/2 left-1/2 z-30 mx-auto w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary-100 py-10 drop-shadow-lg  "
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            <NavigationButtons
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
