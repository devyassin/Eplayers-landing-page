import React from "react";
import { Link } from "react-router-dom";

type Props = {
  iconUrl: string;
  name: string;
  path: string;
  activeSidebar: string;
  setActiveSidebar: (value: string) => void;
};

const SideBarBtn = ({
  iconUrl,
  name,
  path,
  activeSidebar,
  setActiveSidebar,
}: Props) => {
  return (
    <Link
      onClick={() => {
        setActiveSidebar(name);
      }}
      to={path}
      className={`flex w-full items-center justify-between rounded-tl-full rounded-br-full bg-color-blueDark px-6 py-2 drop-shadow-lg duration-150 hover:opacity-70 ${
        activeSidebar == name ? "bg-primary-500 " : ""
      } `}
    >
      <img
        className="w-8 rounded-lg bg-gray-20 p-[2px]"
        src={iconUrl}
        alt={name}
      />
      <p className={`${activeSidebar == name ? "text-black" : ""}`}>{name}</p>
    </Link>
  );
};

export default SideBarBtn;
