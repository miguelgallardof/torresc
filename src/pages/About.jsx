/* eslint-disable react/style-prop-object */
import React from 'react'
import s from '../styles/hero.module.css'
import image from '../images/about.jpg'
import '../styles/card.css'

export const About = () => {
  return (
    <div>
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
              Torres Construction</h2>
            <p id={s.text}>We are a company dedicated to the construction and remodeling of houses, shopping centers, offices, buildings and others, with a totally customer-oriented management system, made up of a multifunctional work team with extensive experience in the development of works execution and carrying.</p><br></br>
            <p id={s.text}>Out reforms of all kinds, outlined with our values of being transparent, serious, committed and responsible, demanding maximum affectivity from each of our staff, in order to have the quality endorsed by our years of experience, becoming a benchmark for the development of works projects successfully.
            </p>
          </div>



          <div class="container px-4 py-5" id="icon-grid">
            <div className={'row g-4 py-5 row-cols-1 row-cols-lg-3'}>
              <div class="feature col">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-bullseye" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                <h3 class="fs-2">Mission</h3>
                <p>Provide a personalized service, satisfying the needs of our clients before, during and after the project is completed. Complying with the quality standards and deadlines set by it, satisfying our customers through the demand in quality control of our completed work.</p>
              </div>

              <div class="feature col">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                <h3 class="fs-2">Vision</h3>
                <p>To be recognized for its excellence in the quality of our services, through responsibility and efficiency, for being a diversified and integrated company, committed and recognized for its ability to innovate, create and modernize to meet the new needs of our society.</p>
              </div>

              <div class="feature col">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                <h3 class="fs-2">Values</h3>
                {/* <p>At Torres Construction, our main values ​​are:<br></br>Respect<br></br>Transparency<br></br>Commitment<br></br>Punctuality<br></br>Responsibility<br></br>Integrity<br></br>Quality</p> */}
                <p>At Torres Construction, our main values ​​are:<br></br><br></br>Respect, transparency, commitment, punctuality, responsibility, integrity, quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
