import React from "react";
import CardImg from "../component/CardImg";
import productsData from "../ProductsData";
import './Main.css'

function Main(){
    return (
        <div className="img-container">
            {productsData.map((product, id) => <CardImg key={id} imgSrc={product.mainImgSrc} imgTitle={product.name}></CardImg>)}
        </div>
    )
}
export default Main