import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import RealJson from "../../data/RealJson";
import BarcaJson from "../../data/BarcaJson";
import TitleSection from "@/shared/TitleSection";
import StateTitle from "@/shared/StateTitle";
import { useEffect } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const PlayerDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const location = useLocation();
  let currentPath = location.pathname;
  let player;
  let team;
  if (currentPath.includes("barca")) {
    player = BarcaJson.players.find((player) => player.name === id);
    team = "barca";
  } else {
    player = RealJson.players.find((player) => player.name === id);
    team = "real";
  }

  return (
    <div className="w-full">
      <Link className="flex px-10 pt-10" to={`/dashboard/${team}`}>
        <IoArrowBackCircleSharp
          size={50}
          className="cursor-pointer text-blue-400 duration-150 hover:opacity-80"
        />
      </Link>
      <div className="mx-auto flex flex-col items-center py-10">
        <h1 className="card-title pb-6 text-4xl md:text-6xl">{player?.name}</h1>

        <img
          src={player?.picture}
          className="z-10 w-[25rem]"
          alt={player?.name}
          loading="lazy"
        />
        <div className="image-circle -translate-y-14 "></div>
        <div className="flex flex-col items-center py-14">
          <TitleSection title="biography" />
          <p className="text-bio max-w-3xl px-14 md:max-w-4xl">
            {player?.biography}
          </p>
        </div>
        <div className="flex w-full flex-col items-center py-14 ">
          <TitleSection title="Stats" />
          <div className="grid w-full   grid-cols-1 gap-8 px-0 pt-8 md:grid-cols-2 md:px-10 ">
            <div className="flex items-center space-x-4 pl-10  md:pl-0">
              <h3 className="state-title">PLACE OF BIRTH :</h3>
              <p className="opacity-80">{player?.stats.placeOfBirth}</p>
            </div>
            <div className="flex items-center space-x-4 pl-10 pr-[95px] md:justify-end md:pl-0">
              <h3 className="state-title">WEIGHT :</h3>
              <p className="opacity-80">{player?.stats.weight}</p>
            </div>
            <div className="flex items-center space-x-4 pl-10 md:pl-0">
              <h3 className="state-title">DATE OF BIRTH :</h3>
              <p className="opacity-80">{player?.stats.dateOfBirth}</p>
            </div>
            <div className="flex items-center space-x-4 pl-10 pr-[90px] md:justify-end md:pl-0">
              <h3 className="state-title">HEIGHT :</h3>
              <p className="opacity-80">{player?.stats.height}</p>
            </div>
            <div className="flex items-center space-x-4 pl-10 md:pl-0">
              <h3 className="state-title">CLUB DEBUT :</h3>
              <p className="opacity-80">{player?.stats.clubStart}</p>
            </div>
            <div className="flex items-center space-x-4 pl-10 md:justify-end md:pl-0  ">
              <h3 className="state-title">MARKET VALUE :</h3>
              <p className="opacity-80">{player?.stats.marketValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
