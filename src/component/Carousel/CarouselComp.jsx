import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import c1 from "../../Images/c1.webp";
import c2 from "../../Images/c2.webp";
import c3 from "../../Images/c3.webp";
import c4 from "../../Images/c4.webp";
import './CarouselComp.css'

const CarouselComp = () => {
  return (
    <div className="carousel-slide">
      <Carousel showArrows={true} animation="slide" infiniteLoop={true}  autoPlay={true}  showThumbs={false}>
               <div>
               <img src={c1} alt=""/>
               </div>
               <div>
               <img src={c2} alt=""/>
               </div>
               <div>
               <img src={c3} alt=""/>
               </div>
               <div>
               <img src={c4} alt=""/>
               </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;