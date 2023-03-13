import React from 'react';
import s from '../styles/cover.module.css'
import b from '../styles/button.module.css'

export const Cover = () => {
  return (
    <div
      className="p-5 text-center bg-image" id={s.image}>
      <div className="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.5)",}}>
        <div className="d-flex justify-content-center align-items-center h-100" id={s.text}>
          <div className="text-white">
            <h1 className="mb-3">RENOVATE YOUR SPACE</h1><br></br>
            <h4 className="mb-3">At <b>Torres Construction</b> we help you with the renovation, <br></br>construction and remodeling of your home or office.</h4>
            <div>
              <a href='https://wa.me/17049688289' rel='noreferrer' target='_blank'>
                <button className={b.button4}> CONTACT US </button></a>
            </div>
            <div className="container_mouse">
              <span className={s.mouse_btn}>
              <span className={s.mouse_scroll}></span>
              </span>
              <span>Scroll Down</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}