import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import "./Cart.css"
import {RemoveFromCart} from "../../Redux/Action/Action"

const Cart = () => {
  let dispatch=useDispatch();
  let CartProduct=useSelector(state=>state.AddToCartReducer);
  console.log(CartProduct)
  return (
    <div className='cart-container'>
     <div className='cart-subcontainer'>
     { CartProduct.map(a=>{
    return (
      <div className='card-content'>
         <img src={a.thumbnail} alt="productimg" className='card-img-top' />
           <div className='card-body'>
            <p>{a.brand}</p>
            <p>price:-{a.price}$</p>
            <p>Description</p>
            <hr></hr>
            <p>{a.description}</p>
            <button className='remove-btn' onClick={()=>dispatch(RemoveFromCart(a))}>Remove</button>
            <button className='buy-btn'>Buy now</button>
           </div>
        <div>

        </div>
      </div>
    )
    })

   }

      </div>  

    </div>
  )
}

export default Cart
