import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { allProductContext } from "../Api/ProductContext"
import {AddToCart} from "../Redux/Action/Action"
import {useDispatch} from "react-redux"
import './Product.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css" 

const Products = () => {
    let [data, setdata] = useState([]);
    let product = useParams();
    let Allproducts = useContext(allProductContext)
    let dispatch=useDispatch();


    useEffect(() => {
// setdata(Allproducts.products.filter(a => a.category === product.name))

if(product.name==="mobile" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="smartphones"))
}else if(product.name==="fashion" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="fragrances"))
}
else if(product.name==="grocery" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="groceries"))
}
else if(product.name==="beauty" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="skincare"))
}else if(product.name==="homeandfurniture" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="home-decoration"))
}else if(product.name==="electronics" && Allproducts.products){
    setdata(Allproducts.products.filter((a)=>a.category==="laptops"))
}else if (product.name==="offer" && Allproducts.products){
    setdata(Allproducts.products)
}

    }, [Allproducts.products,product.name])

return (
        <div className='d-flex flex-wrap '>
            {
                data? data.map(a => {

                    return (
                        <div className="card d-flex flex-column justify-space-evenly m-1" style={{ width: "18rem",height:"23rem"}} key={a.id}>
                            <img src={a.thumbnail} className="card-img-top " alt="img" style={{height:"40%"}} />
                            <div className="card-body ">
                                <h5 className="card-title">{a.brand}</h5>
                                <p className="card-text text-dark text-wrap">Price:{a.price}$</p>
                                <button className='add-button' onClick={()=>dispatch(AddToCart(a))}>AddToCart</button>
                                <button className='buy-btn'>buy Now</button>
                            </div>
                        </div>
                        
                    )
                }) : <h1>Loadding...🚎</h1>
            }
        </div>
    )
}

export default Products
