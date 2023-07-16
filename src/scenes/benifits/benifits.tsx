import React from "react";
import { BenefitType, SelectedPage } from "@/shared/Types";
import { GiSoccerBall, GiSoccerKick } from "react-icons/gi";
import { SiPagespeedinsights } from "react-icons/si";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Victor from "@/assets/Victor.png";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import Card from "./Card";

const benefits: Array<BenefitType> = [
  {
    icon: <GiSoccerBall className="h-6 w-6 text-primary-500" />,
    title: "Comprehensive Player Profiles",
    description:
      "Access detailed player profiles including performance statistics, skill ratings, and career highlights. Stay informed and make informed decisions.",
  },
  {
    icon: <GiSoccerKick className="h-6 w-6 text-primary-500" />,
    title: "Extensive Player Search",
    description:
      "Effortlessly search for players based on various criteria such as position, age, nationality, and more. Find the perfect fit for your team or scouting needs.",
  },
  {
    icon: <SiPagespeedinsights className="h-6 w-6 text-primary-500" />,
    title: "Performance Insights",
    description:
      "Unlock valuable insights into player performance trends, strengths, weaknesses. Gain a competitive edge with data-driven decisions.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benifits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 pt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>BEYOND PLAYER PROFILES</HText>
          <p className="my-5 text-sm">
            We offer an exceptional platform that goes beyond basic player
            information. Gain access to comprehensive player profiles, in-depth
            statistics, and valuable insights to stay ahead of the game. We are
            dedicated to providing unparalleled support to each and every user.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Card
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-[60%] pb-10 md:w-[35%] md:pb-0"
            alt="benefits-page-graphic"
            src={Victor}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF PLAYER PROFILES AT YOUR FINGERTIPS
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Discover an expansive collection of player profiles, providing
                valuable insights and information. Unlock the potential of
                countless players across various leagues and levels. Access
                comprehensive details, statistics, and performance data to make
                informed decisions. Stay ahead of the game with our vast player
                database.
              </p>
              <p className="mb-5">
                Experience the power of data-driven scouting and player
                analysis. Join our platform and elevate your understanding of
                players like never before. Get ready to revolutionize your
                approach to soccer with millions of player profiles at your
                fingertips.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default benifits;
