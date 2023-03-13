/* eslint-disable no-undef */
import React from 'react';
import slide01 from "../images/slide01.jpg";
import slide02 from "../images/slide02.jpg";
import slide03 from "../images/slide03.jpg";
import slide04 from "../images/slide04.jpg";
import slide05 from "../images/slide05.jpg";
import s from '../styles/carousel.module.css'

export const Carousel = () => {
    /* var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();

    var scrollPosition = 0;

    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
          scrollPosition += cardWidth;  //update scroll position
          $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
        }
      });

      $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $(".carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      }); */
  return (
    <div className='container'>
        <div id="carouselMultiple" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-inner" id={s.carouselInner}>
                <div className="carousel-item active" id={s.carouselItem}>
                    <div className={s.imageWrapper}>
                        <img src={slide01} className="d-block w-100" alt="slide01"/>
                    </div>
                </div>
                <div className="carousel-item" id={s.carouselItem}>
                    <div className={s.imageWrapper}>
                        <img src={slide02} className="d-block w-100" alt="slide02"/>
                    </div>
                </div>
                <div className="carousel-item" id={s.carouselItem}>
                    <div className={s.imageWrapper}>
                        <img src={slide03} className="d-block w-100" alt="slide03"/>
                    </div>
                </div>
                <div className="carousel-item" id={s.carouselItem}>
                    <div className={s.imageWrapper}>
                        <img src={slide04} className="d-block w-100" alt="slide04"/>
                    </div>
                </div>
                <div className="carousel-item" id={s.carouselItem}>
                    <div className={s.imageWrapper}>
                        <img src={slide05} className="d-block w-100" alt="slide05"/>
                    </div>
                </div>
            </div>

        
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMultiple" data-mdb-slide="prev">
                <span className="material-symbols-outlined"> arrow_back_ios </span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselMultiple" data-mdb-slide="next">
                <span className="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
        </div>
    </div>
  )
}