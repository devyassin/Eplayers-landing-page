import React from "react";
import { SelectedPage } from "@/shared/Types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/soccerDetails.png";
import Messi from "@/assets/messi.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-gray-20 pt-40 md:pt-24">
      {/* Global container */}
      <div>
        {/* part 1 */}
        <div className="flex flex-col items-center justify-between px-12  md:flex-row md:px-24 ">
          {/* Text Container */}
          <motion.div
            animate={{
              opacity: 1,
              x: "0%",
            }}
            initial={{
              x: "-20%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
            }}
            className="relative   flex flex-col  space-y-8"
          >
            <div className="before:absolute before:-top-20 before:-left-16 before:z-0 md:before:content-evolvetext">
              <img
                className="relative z-[2] w-[90%]"
                src={HomePageText}
                alt="Logo name"
              />
            </div>
            <p className="max-w-2xl text-sm md:max-w-lg ">
              Discover the Ultimate Player Insights Platform. Unrivaled Access
              to Comprehensive Player Profiles. Unlock Valuable Information on
              Soccer Players. Elevate Your Understanding and Stay Ahead in the
              Game.
            </p>
            <motion.div
              animate={{
                opacity: 1,
                x: "0%",
              }}
              initial={{
                x: "-10%",
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
              }}
              className="flex items-center space-x-4"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </motion.div>
          {/* Image Container */}
          <div className="flex justify-center  md:justify-end">
            <img src={Messi} className="w-full md:w-[80%]" alt="women 1" />
          </div>
        </div>
        {/* part 2 */}
        <div className="bg-color-blueDark">
          <div className="hidden items-center justify-between px-24 py-8 md:flex">
            <img src={SponsorRedBull} alt="image sponsor 1" />
            <img src={SponsorForbes} alt="image sponsor 2" />
            <img src={SponsorFortune} alt="image sponsor 3" />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
