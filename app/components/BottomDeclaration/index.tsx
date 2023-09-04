import React, { FC } from "react";

type BottomDeclarationProps = {};

const BottomDeclaration: FC<BottomDeclarationProps> = (props) => {
  const {} = props;
  return (
    <div>
      power by
      <a href={"https://github.com/catgrandfa"} className={"underline"}>
        catgrandfa
      </a>
    </div>
  );
};

export default BottomDeclaration;
