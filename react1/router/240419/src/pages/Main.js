import React from "react";
import CardImg from "../component/CardImg";
import productsData from "../ProductsData";
import './Main.css'

function Main(){
    return (
        <>
            <input></input>
            <div className="img-container">
                {productsData.map((product, id) => <CardImg key={id} imgSrc={product.mainImgSrc} imgTitle={product.name} id={product.id}></CardImg>)}
            </div>
        </>

    )
}
export default Main