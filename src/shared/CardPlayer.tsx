import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  name: string;
  role: string;
  picture: string;
};

const CardPlayer = ({ name, role, picture }: Props) => {
  const location = useLocation();
  let currentPath = location.pathname;
  const lenght = currentPath.length;
  if (lenght < 12) {
    currentPath = currentPath + "/real";
  }
  return (
    <Link
      to={`${currentPath}/${name}`}
      className="card-box flex flex-col items-center px-[0.81rem] pt-[1.19rem]"
    >
      {/* Title */}
      <h1 className="card-title pb-4 text-[1.5rem] md:text-[2.5rem]">{name}</h1>
      {/* Role */}
      <p className="card-role pb-4">{role}</p>
      {/* Picture */}
      <img src={picture} alt={name} loading="lazy" />
    </Link>
  );
};

export default CardPlayer;
