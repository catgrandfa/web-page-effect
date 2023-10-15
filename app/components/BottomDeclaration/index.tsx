import React, { FC } from "react";

type BottomDeclarationProps = {};

const BottomDeclaration: FC<BottomDeclarationProps> = (props) => {
  const {} = props;
  return (
    <div>
      power by &nbsp;
      <a href={"https://github.com/catgrandfa"} className={"underline"} target="_blank">
        catgrandfa
      </a>
    </div>
  );
};

export default BottomDeclaration;
