import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProducts from "./ListProduts";
import DetailsProduit from "./DetailProduit";
const Chemin =()=>{
    const Productss = [ 
        { 
            id: 1, 
            title: 'PC Portable Gamer HP VICTUS', 
            price: '7490 DH', 
            thumbnail :  "capture1.PNG"
        }, 
        { 
            id: 2, 
            title: 'PC Portable Gamer HP VICTUS',
            price: '2190 DH', 
            thumbnail : 'Capture2.PNG' 
        }, 
        { 
            id: 3, 
            title: 'Pc Portable Chromebook Acer',
            price: '3640 DH', 
            thumbnail: 'Capture3.PNG' 
        }, 
        { 
            id: 4, 
            title: 'PC Portable - HUAWEI',
            price: '1270 DH', 
            thumbnail: 'Capture4.PNG' 
        }, 
    ]; 
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProducts list={Productss}/>}/>
                <Route path="/product/:id" element={<DetailsProduit list={Productss}/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Chemin;