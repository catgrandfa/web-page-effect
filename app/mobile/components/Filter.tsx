"use client";
import { useProductsContext } from "@/app/providers/products/context";
import React from "react";

const Filter: React.FC<any> = (props) => {
    const { fetchData, setData, data } = useProductsContext();
    return (
        <div>
            <div>This is Filter</div>
            <div>{JSON.stringify(data)}</div>
            <button
                onClick={() => {
                    fetchData("mobile").then((res) => {
                        setData(res);
                    });
                }}
            >
                cilck me
            </button>
        </div>
    );
};

export default Filter;
