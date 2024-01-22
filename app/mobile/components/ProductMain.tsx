"use client";
import React, { Suspense, useState } from "react";
import Filter from "./Filter";
import { fetchMobileData } from "../serverAction";
import Product from "./Product";
import { useProductsContext } from "@/app/providers/products/context";
import { ProductsProvider } from "@/app/providers/products/provider";

const ProductMain: React.FC<any> = (props) => {
    const { fetchData, setData } = useProductsContext();
    const [clientData, setClientData] = useState<any>(null); // [data, setData
    const upDateValue = async (type: string) => {
        // "use server";
        const res = await fetchData(type);
        setData(res);
        setClientData(res);
        console.log("res", res);
    };

    return <div></div>;
};

export default ProductMain;
