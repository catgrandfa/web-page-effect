import React, { ReactNode} from 'react';
import TopNavigation from "@/app/components/TopNavigation";
import BottomDeclaration from "@/app/components/BottomDeclaration";


const Template = ({children}: { children: ReactNode }) => {
    return <div>
        <TopNavigation/>
        {children}
        <BottomDeclaration/>
    </div>
}

export default Template;