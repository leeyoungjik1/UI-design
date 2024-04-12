import React from "react";
import './연습과제4_Product.css'

function Product({img, name, price, description, productType}){
    return(
        <div className="product">
            <div className='product-img'><img src={img}/></div>
            <div className='product-name'>{name} {`($${price})`}</div>
            <div className='product-description'>{description}</div>
            <div className='product-type'>{productType}</div>
        </div>
    )
}
export default Product