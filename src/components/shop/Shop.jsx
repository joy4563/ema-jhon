import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // console.log(products[0]);
    return (
        <div className="shop-container">
            {/* product list */}
            <div className="product-container">
                {products.map((product) => (
                    <Product key={product.id} //key tare show kore na
                    product={product}></Product>
                ))}
            </div>
            {/* order summery cart */}
            <div className="cart-container">
                <h3>Order Summery</h3>
            </div>
        </div>
    );
};

export default Shop;
