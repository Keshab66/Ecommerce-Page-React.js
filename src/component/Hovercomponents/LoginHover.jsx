import React from 'react'
import { Link } from 'react-router-dom';
import './LoginHover.css'

const LoginHover = () => {
  return (
    <div className='btn-hover'>
      <div className='btn-items'>
        <Link to="/" className='link-tag'>My Profile</Link>
      </div>
      <div className='btn-items'>
        <Link to="/" className='link-tag'>Orders</Link>
      </div>
      <div className='btn-items'>
        <Link to="/" className='link-tag'>Wishlist</Link>
      </div>
      <div className='btn-items'>
        <Link to="/" className='link-tag'>Rewards</Link>
      </div>
      <div className='btn-items'>
        <Link to="/" className='link-tag'>Gift Cards</Link>
      </div>
    </div>
  )
}

export default LoginHover;
