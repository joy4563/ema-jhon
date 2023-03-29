import React from "react";
import "./Product.css";

const Product = (props) => {
    // console.log(props.product);
    const { name, price, ratings, seller, img } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                {" "}
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className="add-cart-btn">Add to cart</button>{" "}
        </div>
    );
};

export default Product;
