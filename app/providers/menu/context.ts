"use client";
import { useContext } from "react";
import { MenuContext, MenuDataProps } from "./provider";

export function useMenuContext(): MenuDataProps {
    const store = useContext(MenuContext);
    if (!store) throw new Error("Missing MenuContext.Provider in the tree");
    return store;
}
