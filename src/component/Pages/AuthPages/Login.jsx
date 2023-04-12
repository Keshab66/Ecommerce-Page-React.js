
import "./Auth.css"
import {Link} from "react-router-dom"
import topoffers from "../../../Images/topoffers.webp"

const Login = ({displaysignmodel}) => {
 

  let loginhandle=async (e)=>{
    e.preventDefault();
     try {

     } catch (error) {

     }
  }

  return (
    <div id='login-container'>
      <div id='login-left'>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <div id='login-img'>
          <img src={topoffers} alt="img" />
        </div>
      </div>
      <div id='login-right'>
         <form onSubmit={loginhandle}>
         <div className='login-items'>
          <input type="email" placeholder='Enter  Email' required/>
          <input type="password" placeholder='Enter password' required />
        <span>By continuing, you agree to Flipkart's <Link>Terms of use</Link> and <Link>Privecy policy</Link></span>
        <button type='submit'>Login</button>
          </div>
         </form>
          <div className='signup-link'>
            <Link onClick={displaysignmodel}>New to Flipkart? Create an account</Link>
          </div>
      </div>
    </div>
  )
}

export default Login
