"use client";
import { useProductsContext } from "@/app/providers/products/context";
import React, { useEffect, useState } from "react";

interface ProductListProps {
    // Define the props for the component here
    serverData?: any;
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const { serverData } = props;
    // Implement the component logic here
    const { data } = useProductsContext();

    const [renderData, setRenderData] = useState<any>(serverData);
    // useEffect(() => {
    //   console.log(data);
    //   if (data) setRenderData(data);
    // }, [data]);
    // console.log(data);
    useEffect(() => {
        console.log(data);

        if (serverData) setRenderData(serverData);
    }, [data]);

    return <div>{data}</div>;
};

export default ProductList;
