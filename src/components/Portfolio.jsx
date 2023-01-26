import React from 'react';
import img1 from '../images/portfolio1.jpg'
import img2 from '../images/portfolio2.jpg'
import img3 from '../images/portfolio3.jpg'
import img4 from '../images/portfolio4.jpg'
import img5 from '../images/portfolio5.jpg'
import s from '../styles/portfolio.module.css'
import b from '../styles/button.module.css'

export const Portfolio = () => {
  return (
    <section class="py-20">
      <div class= {`container ${s.container}`}>
      <h2 className="display-5 fw-bold lh-1 mb-3" id={s.title}>
      We love our</h2>
        <p id={s.text}>You can review the photos of our work, as well as being able to filter it by categories.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <div className='container' id={s.container_buttons}>
            <button className={b.button1}> See more </button>
            <button className={b.button2}> Contact us </button>
          </div>
        </div>
        <div class="row mb-n6">
          <div class="col-12 col-lg-6 mb-4">
            <img class="img-fluid w-100 rounded-3"
            objectFit= "cover" src={img1} alt=""/>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <img class="img-fluid w-100 rounded-3"
            objectFit= "cover" src={img2} alt=""/>
          </div>
          <div class="col-12 col-lg-4 mb-4">
            <img class="img-fluid w-100 rounded-3"
            objectFit= "cover" src={img3} alt=""/>
          </div>
          <div class="col-12 col-lg-4 mb-4">
            <img class="img-fluid w-100 rounded-3"
            bjectFit= "cover" src={img4} alt=""/>
          </div>
          <div class="col-12 col-lg-4 mb-4">
            <img class="img-fluid w-100 rounded-3"
            objectFit= "cover" src={img5} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};