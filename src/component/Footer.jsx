import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
    {/* footer of the webpage */}
  <div>
<footer class="footer-distributed">

   <div class="footer-left">
         <h2>
           <span className="main">PhoneMania</span>
         </h2>

     <p class="footer-links">
       <a href="home" class="link-1">Home</a>
       
       <a href="blog">Blog</a>
     
       <a href="pricing">Pricing</a>
     
       <a href="about">About</a>
       
       <a href="faq">Faq</a>
       
       <a href="contact">Contact</a>
     </p>

     <p class="footer-company-name">
        <h2>
           <span className="main">PhoneMania</span>
         </h2> © 2023</p>
   </div>

   <div class="footer-center">

     <div>
       <p><span>sjp005064 ,Bangalore</span> point 0, Bangalore</p>
     </div>

     <div>
       <p>+1.555.555.5555</p>
     </div>

     <div>
       <p><a href="mailto:support@company.com">support@PhoneMania.com</a></p>
     </div>
   </div>
   <div class="footer-right">
     <p class="footer-company-about">
       <span>About the PhoneMania</span>
       Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
     </p>
   </div>
 </footer>
  </div>
  </div>
  )
}

export default Footer
