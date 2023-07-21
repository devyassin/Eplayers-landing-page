import React from "react";

type Props = {
  title: string;
};

const TitleSection = ({ title }: Props) => {
  return (
    <h1 className="gros text-4xl pb-16  font-bold text-color5 sm:text-5xl">{title}</h1>
  );
};

export default TitleSection;
