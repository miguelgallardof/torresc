import React from 'react';
import slide01 from "../images/slide01.jpg";
import slide02 from "../images/slide02.jpg";
import slide03 from "../images/slide03.jpg";
import slide04 from "../images/slide04.jpg";
import slide05 from "../images/slide05.jpg";
import s from '../styles/slider.module.css'

export const Slider = () => {
  return (
    <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div className="carousel-inner" id={s.container}>
        <div className="carousel-item active" id={s.item}>
          <img src={slide01} className="d-block w-100" alt="slide01" id={s.img}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Drywall</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
        <div className="carousel-item" id={s.item}>
          <img src={slide02} className="d-block w-100" alt="slide02" id={s.img}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Painting</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
        <div className="carousel-item" id={s.item}>
          <img src={slide03} className="d-block w-100" alt="slide03" id={s.img}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Flooring</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
        <div className="carousel-item" id={s.item}>
          <img src={slide04} className="d-block w-100" alt="slide04" id={s.img}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Decks</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
        <div className="carousel-item" id={s.item}>
          <img src={slide05} className="d-block w-100" alt="slide05" id={s.img}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Renovations</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
        <span className="material-symbols-outlined"> arrow_back_ios </span>
      </button>
      <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
        <span className="material-symbols-outlined"> arrow_forward_ios </span>
      </button>
    </div>
  )
}