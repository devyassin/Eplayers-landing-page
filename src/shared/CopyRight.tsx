import React from "react";

type Props = {};

const CopyRight = (props: Props) => {
  return (
    <p>
      © Copyright 2023 By{" "}
      <a
        className="text-primary-500"
        href="https://www.linkedin.com/in/yassine-lamouadden/"
        target="_blank"
      >
        Yassine Lamouadden
      </a>
      . All rights reserved.
    </p>
  );
};

export default CopyRight;
