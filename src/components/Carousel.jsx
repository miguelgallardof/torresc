import React from "react";
import Slider from "react-slick";
import img1 from '../images/service1.jpg'
import img2 from '../images/service2.jpg'
import img3 from '../images/service3.jpg'
import img4 from '../images/service4.jpg'
import img5 from '../images/service5.jpg'
import img6 from '../images/service6.jpg'

export const Carousel = () => {
    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      cssEase: "linear"
      };
      return (
        <div class='container'>
          <Slider {...settings}>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img1} alt=""/>
            </div>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img2} alt=""/>
            </div>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img3} alt=""/>
            </div>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img4} alt=""/>
            </div>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img5} alt=""/>
            </div>
            <div>
              <img class="img-fluid w-100 rounded-3"
              objectFit= "cover" src={img6} alt=""/>
            </div>
          </Slider>
        </div>
      );
    }