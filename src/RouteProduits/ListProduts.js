import React from "react";
import Product from "./product";




const ListProducts=(props)=>{

        
    return(
        <main className="container"> 
            <h1>Ordinateurs portables</h1> 
            <div className="row mb-2">
                {props.list.map((e)=><Product key={e.id} thumbnail={e.thumbnail} title={e.title} price={e.price} id={e.id}/>)}
            </div> 
        </main> 
        
        
    )
}

export default ListProducts;