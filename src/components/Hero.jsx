import React from 'react';
import image from '../images/hero.jpg'
import s from '../styles/hero.module.css'
import b from '../styles/button.module.css'

export const Hero = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-6" id ={s.content_image}>
        <img src={image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" id={s.image}/>
      </div>
      <div class="col-lg-6">
        <h2 class="display-5 fw-bold lh-1 mb-3" id={s.title}>We are your best choice</h2>
        <p id={s.text}>Garcia’s Renovation is a company dedicated to the construction and remodeling of houses, shopping centers, offices, buildings and others, with a totally customer-oriented management system, made up of a multifunctional work team with extensive experience in the development of works execution and carrying.</p>

        <p id={s.text}>Out reforms of all kinds, outlined with our values of being transparent, serious, committed and responsible, demanding maximum affectivity from each of our staff, in order to have the quality endorsed by our years of experience, becoming a benchmark for the development of works projects successfully.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <div className='container' id={s.container_buttons}>
          <button className={b.button1}> Read more </button>
          <button className={b.button2}> Contact us </button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}