import React from "react";
import ProductList from "./ProductList";
import { fetchMobileData } from "../serverAction";

interface ProductProps {
    // Define the props for your component here
    data?: any;
}

const Product: React.FC<ProductProps> = async (props) => {
    // Implement your component logic here
    const res = props.data ?? (await fetchMobileData("first"));
    console.log(res);

    return (
        // JSX code for your component's UI goes here
        <div>
            <ProductList serverData={JSON.stringify(res)}></ProductList>
        </div>
    );
};

export default Product;
