import React from 'react';
import image from '../images/hero.jpg'
import s from '../styles/hero.module.css'
import b from '../styles/button.module.css'
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image} className="d-block mx-lg-auto img-fluid animation slide-out-right"
            alt="img" width="700" height="500" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            We are your best choice</h2>
          <p id={s.text}>Torres Construction is a company dedicated to the construction and remodeling of houses, shopping centers, offices, buildings and others, with a totally customer-oriented management system, made up of a multifunctional work team with extensive experience in the development of works execution and carrying.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className='container' id={s.container_buttons}>
              <Link to = '/about'>
                <button className={b.button1}> Read more </button>
              </Link>
              <Link to = '/contact'>
                <button className={b.button2}> Contact us </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}