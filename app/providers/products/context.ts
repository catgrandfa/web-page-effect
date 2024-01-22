"use client";
import { useContext } from "react";
import { ProductsContext, ProductsProps } from "./provider";

export function useProductsContext(): ProductsProps {
    const store = useContext(ProductsContext);
    if (!store) throw new Error("Missing MenuContext.Provider in the tree");
    return store;
}
