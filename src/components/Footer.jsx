import React from 'react';
import {Link} from 'react-router-dom'
import s from '../styles/footer.module.css'
import l from '../styles/link.module.css'

export const Footer = () => {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <>
      <div>
        <footer className='text-center text-lg-start text-muted' id={s.footer}>
          <section className='d-flex container text-center text-md-start mt-5 justify-content-lg-between p-4'>
            <div className='me-5 d-none d-lg-block'>
              <p className = 'text-light'>Get connected with us on social networks:</p>
            </div>
            <div className={s.social_icon}>
              <a href='https://facebook.com/torresconsctruction' rel='noreferrer' target='_blank' className='me-4 text-reset'>
                <i className='bi bi-facebook' id={s.fb}></i>
              </a>
              <a href='https://instagram.com/torres_construction10/' rel='noreferrer' target='_blank' className='me-4 text-reset'>
                <i className='bi bi-instagram' id={s.ig}></i>
              </a>
              <a href='https_//linkedin.com' className='me-0 text-reset'>
                <i className='bi bi-linkedin' id={s.yt}></i>
              </a>
            </div>
          </section>

          <section>
            <div className='container text-center text-md-start mt-5'>
              <div className='row mt-3'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <img className={s.logo_footer} src='https://res.cloudinary.com/miguelgallardof/image/upload/v1674260416/Torres%20Construction/logo2.svg' alt='logo' />
                  </h6>
                  <p className = 'text-light'>
                    The logo and brand are the property of <b>Torres Home Construction LLC</b>. All rights reserved.
                  </p>
                  <a href='/'>
                    <button className={l.button}>
                      <div className={l.text}>
                        <p className = 'text-light'>Back</p>
                        <p className = 'text-light'>to</p>
                        <p className = 'text-light'>top</p>
                      </div>
                      <div className={l.clone}>
                        <p className = 'text-light'>Back</p>
                        <p className = 'text-light'>to</p>
                        <p className = 'text-light'>top</p>
                      </div>
                      <span className='material-symbols-outlined'>east</span>
                    </button>
                  </a>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    Useful links
                  </h6>
                  <p>
                    <Link to ='/about' className='text-light'>About</Link>
                  </p>
                  <p>
                    <Link to ='/services' className='text-light'>Services</Link>
                  </p>
                  <p>
                    <Link to ='/gallery' className='text-light'>Gallery</Link>
                  </p>
                  <p>
                    <Link to ="/contact" className='text-light'>Contact</Link>
                  </p>
                </div>

                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p className = 'text-light'><i className='bi bi-house-door'></i> North Carolina, NC, US</p>
                  <p className = 'text-light'>
                    <i className='bi bi-envelope'></i> info@torreshc.com
                  </p>
                  <p className = 'text-light'><i className='bi bi-whatsapp'></i> 704 968 8289</p>
                  <p className = 'text-light'><i className='bi bi-phone'></i> 704 277 5688</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='text-center p-4' id={s.c_desktop}>
              <p className='text-light' id={s.copy}>
                &copy; 2022 - {year} | <span className='fw-bold'>TORRES CONSTRUCTION</span>. Developed with <i className='bi bi-heart-fill' id={s.heart}></i> by <a href='https://gales.pe' rel='noreferrer' target='_blank'><img className={s.logo_copy} src='https://res.cloudinary.com/miguelgallardof/image/upload/v1674340653/Gales/logo2.svg' alt='gales.pe' /></a>
              </p>
            </div>
            <div className='text-center p-4' id={s.c_mobile}>
              <p className='text-light' id={s.copy}>
                &copy; 2022 - {year} | <span className='fw-bold'>TORRES CONSTRUCTION</span>. <br></br> Developed with <i className='bi bi-heart-fill' id={s.heart}></i> by <a href='https://gales.pe' rel='noreferrer' target='_blank'><img className={s.logo_copy} src='https://res.cloudinary.com/miguelgallardof/image/upload/v1674340653/Gales/logo2.svg' alt='gales.pe' /></a>
              </p>
            </div>
          </section>


        </footer>
      </div>
    </>
  )
}