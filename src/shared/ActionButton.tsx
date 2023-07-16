import React from "react";
import { SelectedPage } from "@/shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      className="cursor-pointer rounded-lg bgButton px-8  py-2 transition duration-150 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
