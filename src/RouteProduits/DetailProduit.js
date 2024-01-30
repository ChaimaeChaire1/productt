import React from "react";
import { Link, useParams } from "react-router-dom";
const DetailsProduit=(props)=>{
    const {id}=useParams();
    return(
        <>
            <div>
                {props.list.filter((e)=>e.id==id)
                .map((p)=>
                <div className="col" style={{width:"400px"}}> 
                <div className="card shadow-sm"> 
                    <img className="bd-placeholder-img card-img-top" 
                    src={`/${p.thumbnail}`} alt="photo" /> 
                    <div className="card-body"> 
                        <p className="card-title">{p.title}</p> 
                        <p className="card-text">{p.price}</p> 
                        <div className="d-flex justify-content-between align- 
                        items-center"> 
                            <div className="btn-group"> 
                            <Link to="/">Allez vers la page d'accueil</Link>
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>
                )}
            </div>
        </>
    )
}
export default DetailsProduit;