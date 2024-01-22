import { Suspense } from "react";
import Product from "./components/Product";
import ProductMain from "./components/ProductMain";
import { ProductsProvider } from "../providers/products/provider";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

const Page = () => {
    return (
        <div>
            移动端页面
            <div>
                <ProductsProvider data={"init"}>
                    <Filter />
                    {/* <Suspense fallback={<div>Loading...</div>}> */}
                    {/* <Product /> */}
                    {/* </Suspense> */}
                    <ProductList></ProductList>
                </ProductsProvider>
            </div>
        </div>
    );
};

export default Page;
