import React from "react";

type Props = {
  image: string;
  title: string;
  info: string;
  position:string;
};

const StateTitle = ({ image, title, info,position }: Props) => {
  return (
    <div
      className={`gros flex items-center justify-center space-x-2 md:${position}`}
    >
      <img className="h-[30px] w-[30px]" src={image} />
      <h3 className="text-[14px] font-bold text-primary-500 md:text-[20px]">
        {title} :
      </h3>
      <h3 className="gray-500 pl-2 text-[12px] font-bold md:text-[18px]">
        {info}
      </h3>
    </div>
  );
};

export default StateTitle;
