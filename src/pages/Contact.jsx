import React from 'react';
import b from '../styles/button.module.css'
import s from '../styles/contact.module.css'
import image from '../images/contact.jpg'

export const Contact = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image} className="d-block mx-lg-auto img-fluid animation slide-out-right rounded-8"
            alt="img" width="700" height="500" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Have any question? Text me!</h2>
          <p id={s.text}>Mon - Sat 8:00 - 20:00 CET</p>
          <p id={s.text}>Phone: 704 968 8289</p>
          <div className={`d-sm-flex mb-n4 ${s.container_buttom}`}>
            <a className="d-flex align-items-center text-decoration-none me-sm-14 mb-4" href="/">
              <img src="https://img.icons8.com/fluency/35/null/whatsapp.png" alt='WhatsApp'/>
              <a className={s.social} href="/">WhatsApp</a>
            </a>
            <a className="d-flex align-items-center text-decoration-none  mb-4" href="/">
              <img src="https://img.icons8.com/fluency/30/null/facebook-messenger--v2.png" alt='Messenger'/>
              <a className={s.social} href="/">Messenger</a>
            </a>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className='container' id={s.container_buttons}>
            <div className={`d-flex flex-wrap align-items-center mb-n4 
              ${s.container_buttom}`}>
                <button className={b.button1} href="tel:+51997183462">
                  Call us
                </button>
                <button className={b.button2} href="tel:+51997183462">
                  Send a mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}