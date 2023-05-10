import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {GrCart,GrBook,GrSearchAdvanced,GrHome} from 'react-icons/gr'
import LoginHover from '../Hovercomponents/LoginHover'
import { Modal } from "react-bootstrap"
import { useSelector } from "react-redux"
import  { useState } from 'react'
import Login from '../Pages/AuthPages/Login'
import Signup from '../Pages/AuthPages/SignUp'


const Navbar = () => {
  let [show, setisShow] = useState(false);
  let [signupModel, setsignupmodel] = useState(false)
  // let navigate = useNavigate();
  let CartProduct = useSelector(state => state.AddToCartReducer);

  let iconStyles = { color: "white", fontSize: "1.2em", margin: "2px" };

  let displaymodel = () => {
    setsignupmodel(false)
    if (show) {
      setisShow(false)
    } else {
      setisShow(true)
    }
  }

  let displaysignmodel = () => {
    setisShow(false)
    if (signupModel) {
      setsignupmodel(false)
    } else {
      setsignupmodel(true)
    }
  }
  return (
    <div>
       <nav className="nav-container">
        <div className="demo-logo"><span className='logo'>PhoneMania <span id='plus'>+</span></span> </div>
        <div className="nav-bar">
            <div className="search-bar">
                <input className="search-bar" type="text" name="text" id="search" placeholder="Search for anything" />
                <GrSearchAdvanced className='search-icon'/>
            </div>
           <div className="link-tags">
            <Link to="/Home"><GrHome/>Home</Link>
            <Link to="/About"><GrBook/>About Us</Link>
            <Link to="/Cart"  ><GrCart style={iconStyles}/><sup style={{ color: "yellow", fontSize: "16px" }}>
              {CartProduct.length === 0 ? null : CartProduct.length}
            </sup>Cart</Link>
           </div>
           <div id='btn'>
      <Link >  <button className="loginBtn" onClick={displaymodel}>Login</button></Link>
            <div id='dropdown'>
              <LoginHover  data={displaysignmodel}></LoginHover>
             </div> 
           </div> 
        </div>
    </nav>
    <Modal show={show} dialogClassName="custom-dialog">
        <button onClick={displaymodel} className="dialogbtn" >X</button>
        <Login displaysignmodel={displaysignmodel} />
      </Modal>
      <Modal show={signupModel} dialogClassName="custom-dialog">
        <button onClick={displaysignmodel} className="dialogbtn" >X</button>
        <Signup data={displaymodel} />
      </Modal>
      
    {/* carousel component  */}
      <div>
   
      </div>
    </div>
  )
}

export default Navbar
