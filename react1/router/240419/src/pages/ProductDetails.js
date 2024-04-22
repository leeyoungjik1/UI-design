import React from "react";
import { useParams, Link } from 'react-router-dom'
import productsData from "../ProductsData";
import "./ProductDetails.css";

function ProductDetails(){
    const params = useParams()
    const product = productsData.find(product => product.id === Number(params.productName))
    return (
        <div className="details-container">
            <img src={product.mainImgSrc}></img>
            <h1>{product.name}</h1>
            <br/>
            <p>Designed by {product.designed}  |  produced by {product.produced}</p>
            <br/>
            <p>{product.description}</p>
            <div>
                {product.subImgSrc.map((subImg, id) => <img key={id} src={subImg}/>)}
            </div>
            <div className="sub-menus">
                {productsData.map((product, id) => <Link key={id} to={`/productdetails/${product.id}`}>{product.designed}</Link>)}
            </div>
        </div>
    )
}
export default ProductDetails