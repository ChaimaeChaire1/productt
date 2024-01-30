import React from "react";
import "./product.css"
import { Link } from "react-router-dom";
const Product=(props)=>{

    const img = "imgs/"+props.thumbnail;
    return(
        <div className="col"> 
            <div className="card shadow-sm"> 
                <Link to={`/product/${props.id}`}><img className="bd-placeholder-img card-img-top" 
                src={img} alt="" /> </Link>
                <div className="card-body"> 
                    <p className="card-title">{props.title}</p> 
                    <p className="card-text">{props.price}</p> 
                    <div className="d-flex justify-content-between align- 
                    items-center"> 
                        <div className="btn-group"> 
                        <button type="button" className="btn btn1 btn-sm btn- 
                        outline-secondary">Ajouter au panier</button> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    )
}

export default Product;