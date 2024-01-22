"use client";
import { fetchMobileData } from "@/app/mobile/serverAction";
import { createContext, useRef } from "react";

export type ProductsDataProps = {
    data: any;
};
export type ProductsProps = ProductsDataProps & {
    setData: (data: any) => void;
    fetchData: (type: string) => Promise<any>;
};
export const ProductsContext = createContext<ProductsProps | null>(null);

type ProductsProviderProps = React.PropsWithChildren<ProductsDataProps>;

export function ProductsProvider({
    children,
    ...props
}: ProductsProviderProps) {
    const storeRef = useRef<ProductsProps>();
    if (!storeRef.current) {
        storeRef.current = {
            ...props,
            setData: (data: any) => {
                storeRef.current!.data = data;
                console.log(storeRef.current);
            },
            fetchData: async (type) => {
                return await fetchMobileData(type);
            },
        };
    }
    return (
        <ProductsContext.Provider value={storeRef.current}>
            {children}
        </ProductsContext.Provider>
    );
}
