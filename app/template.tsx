import React, { ReactNode } from "react";
import TopNavigation from "@/app/components/TopNavigation";
import BottomDeclaration from "@/app/components/serverComponents/BottomDeclaration";

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <TopNavigation />
            {children}
            <BottomDeclaration />
        </>
    );
};

export default Template;
