"use client";
import { IMenuDataProps } from "@/app/components/TopNavigation/menuConst";
import { createContext, useRef } from "react";

export type MenuDataProps = {
    menuData: IMenuDataProps[];
};

export const MenuContext = createContext<MenuDataProps | null>(null);

type MenuProviderProps = React.PropsWithChildren<MenuDataProps>;

export function MenuProvider({ children, ...props }: MenuProviderProps) {
    const storeRef = useRef<MenuDataProps>();
    if (!storeRef.current) {
        storeRef.current = props;
    }
    return (
        <MenuContext.Provider value={storeRef.current}>
            {children}
        </MenuContext.Provider>
    );
}
