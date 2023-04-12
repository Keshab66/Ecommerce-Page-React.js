import React from 'react';
import { Link } from 'react-router-dom';
import offer from "../../Images/topoffers.webp";
import mobile from "../../Images/mobiles.webp";
import Electronics from "../../Images/electronics.webp";
import Tv from "../../Images/tv.webp";
import fashion from "../../Images/fashion.webp";
import Beauty from "../../Images/beauty.webp";
import HomeandFurniture from "../../Images/furniture.webp";
import flights from "../../Images/flights.webp";
import Grocery from "../../Images/grocery.webp";
import './Home.css'

const Home = () => {
  return (
   
   <div id='product-container'>
     <div className=''><Link to='product/offer'><img src={offer} alt="offerimage"/><p className='product-para'>Top Offer</p></Link></div>
     <div><Link to='product/mobile'><img src={mobile} alt="offerimage"/><p className='product-para'>Mobile & Tablets</p></Link></div>
     <div><Link to='product/electronics'><img src={Electronics} alt=""/><p className='product-para'>Electrinics</p></Link></div>
     <div><Link to='product/tv'><img src={Tv} alt="Tv"/><p className='product-para'>TVs & Appliances</p></Link></div>
     <div><Link to='product/fashion'><img src={fashion} alt="fashion"/><p className='product-para'>Fashion</p></Link></div>
     <div><Link to='product/beauty'><img src={Beauty} alt=""/><p className='product-para'>Beauty</p></Link></div>
     <div><Link to='product/homeandfurniture'><img src={HomeandFurniture} alt="home"/><p className='product-para'>Home & Furniture</p></Link></div>
     <div><Link to='product/flights'><img src={flights} alt="flight"/><p className='product-para'>Flights</p></Link></div>
     <div><Link to='product/grocery'><img src={Grocery} alt="grocery"/><p className='product-para'>Grocery</p></Link></div>
   </div>
  )
}

export default Home;