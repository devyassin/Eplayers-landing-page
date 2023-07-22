import TitleSection from "@/shared/TitleSection";
import React from "react";
import Team from "../../data/Team";
import Icon1 from "../../assets/Icons/user.png";
import Icon2 from "../../assets/Icons/place.png";
import Icon3 from "../../assets/Icons/stadium.png";
import Icon4 from "../../assets/Icons/value.png";
import StateTitle from "@/shared/StateTitle";
import { icons } from "react-icons/lib";
import CardPlayer from "@/shared/CardPlayer";

type Props = {
  team: Team;
};

const TeamContainer = ({ team }: Props) => {
  const [firstName, LastName] = team.name.split(" ");
  return (
    <div className="mt-10 flex w-full  flex-col items-center ">
      <img className="mb-4 w-[12rem] " src={team.logo} alt={team.name} />
      <div className="gros flex space-x-4 text-4xl font-bold capitalize sm:text-5xl">
        <p className="title-color">{firstName}</p>
        <p className="title-color">{LastName}</p>
        <p className="text-color9">team</p>
      </div>
      <div className="roboto mt-8 max-w-2xl px-8 text-center leading-9 opacity-60 sm:max-w-3xl sm:px-0 ">
        {team.description}
      </div>

      {/* trophys */}
      <div className="my-24 flex flex-col items-center ">
        <TitleSection title="Trophies" />
        <div className="gros grid  gap-y-8 gap-x-4 px-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="flex flex-col items-center space-y-3 ">
            <img
              className="relative w-[6rem]"
              src={team.Trophys.ChampionsLeague.picture}
            />
            <div className="absolute flex h-8 w-8 translate-x-8 translate-y-32 items-center justify-center rounded-full border-2 bg-color4 font-bold">
              {team.Trophys.ChampionsLeague.number}
            </div>
            <span className="pt-6 text-center">European Champion Clubs</span>
          </div>
          <div className="flex flex-col items-center space-y-3 ">
            <img
              className="relative w-[11rem]"
              src={team.Trophys.UEAFcup.picture}
            />
            <div className="absolute flex h-8 w-8 translate-x-8 translate-y-32 items-center justify-center rounded-full border-2 bg-color4 font-bold">
              {team.Trophys.UEAFcup.number}
            </div>
            <span className="pt-2 text-center">UEAF</span>
          </div>
          <div className="flex flex-col items-center space-y-3 ">
            <img
              className="relative w-[11rem] "
              src={team.Trophys.EuropienLeague.picture}
            />
            <div className="absolute flex h-8 w-8 translate-x-8 translate-y-32 items-center justify-center rounded-full border-2 bg-color4 font-bold">
              {team.Trophys.EuropienLeague.number}
            </div>
            <span className="pt-2 text-center">Champions League</span>
          </div>
          <div className="flex flex-col items-center space-y-3 ">
            <img
              className="relative w-[11rem] "
              src={team.Trophys.SpanishCup.picture}
            />
            <div className="absolute flex h-8 w-8 translate-x-8 translate-y-32 items-center justify-center rounded-full border-2 bg-color4 font-bold">
              {team.Trophys.SpanishCup.number}
            </div>
            <span className="pt-2">Spanish Champion</span>
          </div>
          <div className="col-span-1 flex flex-col items-center space-y-3 xs:col-span-1 sm:col-span-2 md:col-span-4   ">
            <img
              className="relative w-[4rem]"
              src={team.Trophys.FifaClubWorldCup.picture}
            />
            <div className="absolute flex h-8 w-8 translate-x-8 translate-y-32 items-center justify-center rounded-full border-2 bg-color4 font-bold">
              {team.Trophys.FifaClubWorldCup.number}
            </div>
            <span className="pt-4 text-center">FIFA Club World Cup</span>
          </div>
        </div>
      </div>

      {/* Tshirts */}
      <div className="my-24 flex w-full flex-col items-center ">
        <TitleSection title="T-shirts" />
        <div className="mx-10 grid w-full grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="flex justify-center">
            <img className="w-[12rem]" src={team.Tshirts.Tshirt1} />
          </div>
          <div className="flex justify-center">
            <img className="w-[12rem]" src={team.Tshirts.Tshirt2} />
          </div>
          <div className="col-span-1 flex items-center justify-center sm:col-span-2 md:col-span-1">
            {" "}
            <img className="w-[12rem]" src={team.Tshirts.Tshirt3} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="my-24 flex w-full flex-col items-center justify-center ">
        <TitleSection title="Stats" />
        <div className="mt-10 grid w-full grid-cols-1 items-center  gap-y-8 px-24 md:grid-cols-2 md:gap-x-40">
          <div className="md:pr-20">
            <StateTitle
              image={Icon1}
              title="Average age "
              info={team.info.averageAge}
              position="justify-start"
            />
          </div>
          <div className="md:pr-24">
            <StateTitle
              image={Icon2}
              title="Contry "
              info={team.info.contry}
              position="justify-end"
            />
          </div>
          <StateTitle
            image={Icon3}
            title="Stadium "
            info={team.info.stadium}
            position="justify-start"
          />
          <StateTitle
            image={Icon4}
            title="Market Value "
            info={team.info.marketValue}
            position="justify-end"
          />
        </div>
      </div>

      {/* Players */}
      <div className="my-24 flex w-full flex-col items-center px-24">
        <TitleSection title="Players" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.players.map((player, index) => {
            return (
              <CardPlayer
                key={index}
                name={player.name}
                role={player.role}
                picture={player.picture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
