import React from "react";
import TeamContainer from "./TeamContainer";
import BarcaJson from "../../data/BarcaJson";

const Barca = () => {
  return <TeamContainer team={BarcaJson} />;
};

export default Barca;
