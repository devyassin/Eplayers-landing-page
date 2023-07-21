import React from "react";
import { SelectedPage } from "@/shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <Link
      className="bgButton cursor-pointer rounded-lg px-8  py-2 transition duration-150 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      to="/dashboard"
    >
      {children}
    </Link>
  );
};

export default ActionButton;
