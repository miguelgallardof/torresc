import React from 'react';
import s from '../styles/footer.module.css'
import l from '../styles/link.module.css'

export const Footer = () => {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <>
    <div>
    <footer className="text-center text-lg-start text-muted" id={s.footer}>
      <section className="d-flex container text-center text-md-start mt-5 justify-content-lg-between p-4">
      <div className="me-5 d-none d-lg-block">
          <p>Get connected with us on social networks:</p>
        </div>   
        <div className={s.social_icon}>
          <a href="https://facebook.com" className="me-4 text-reset">
            <i className="bi bi-facebook" id={s.fb}></i>
          </a>
          <a href="https://instagram.com" className="me-4 text-reset">
            <i className="bi bi-instagram" id={s.ig}></i>
          </a>
          <a href="https_//youtube.com" className="me-0 text-reset">
            <i className="bi bi-youtube" id={s.yt}></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img className={s.logo_footer} src="https://res.cloudinary.com/dbvh03usi/image/upload/v1674260416/Torres%20Construction/logo2.svg" alt="logo" />
              </h6>
              <p>
              The logo and brand are the property of <b>Torres Home Construction SLL</b>. All rights reserved.
              </p>
              <a href='/'>
                <button className={l.button}>
                  <div className={l.text}>
                      <p>Back</p>
                      <p>to</p>
                      <p>top</p>
                  </div>
                  <div className={l.clone}>
                      <p>Back</p>
                      <p>to</p>
                      <p>top</p>
                  </div>
                  <span className="material-symbols-outlined">east</span>
                </button>
              </a>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">About</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Services</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Galery</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact</a>
              </p>
            </div>
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="bi bi-house-door"></i> North Carolina, NC, US</p>
              <p>
                <i className="bi bi-envelope"></i> info@torresc.com
              </p>
              <p><i className="bi bi-whatsapp"></i> 704 968 8289</p>
              <p><i className="bi bi-phone"></i> 704 277 5688</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center p-4" id={s.c_desktop}>
          <p id={s.copy}>
            &copy; 2022 - {year} | <span className="fw-bold">TORRES CONSTRUCTION</span>. Developed with <i className="bi bi-heart-fill" id={s.heart}></i> by <img className={s.logo_copy} src="https://res.cloudinary.com/dbvh03usi/image/upload/v1674340653/Gales/logo2.svg" alt="logo" />
          </p>
        </div>
        <div className="text-center p-4" id={s.c_mobile}>
          <p id={s.copy}>
            &copy; 2022 - {year} | <span className="fw-bold">TORRES CONSTRUCTION</span>. <br></br> Developed with <i className="bi bi-heart-fill" id={s.heart}></i> by <img className={s.logo_copy} src="https://res.cloudinary.com/dbvh03usi/image/upload/v1674340653/Gales/logo2.svg" alt="logo" />
          </p>
        </div>
      </section>

      
    </footer>
    </div>
    </>
  )
}