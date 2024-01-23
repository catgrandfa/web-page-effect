import Link from "next/link";
import React, { FC } from "react";

type BottomDeclarationProps = {};

const BottomDeclaration: FC<BottomDeclarationProps> = (props) => {
    const {} = props;
    return (
        <div className="flex justify-center align-middle">
            <span> power by &nbsp;</span>
            <Link
                href={"https://github.com/catgrandfa"}
                className={"underline"}
                target="_blank"
            >
                catgrandfa
            </Link>
        </div>
    );
};

export default BottomDeclaration;
