import React from "react";
import s from '../styles/accordion.module.css'

export const Accordion = () => {
  return(
    <div class="accordion accordion-borderless" id="accordionFlushExampleX">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOneX">
          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
            Why choose us?
          </button>
        </h2>
        <div id="flush-collapseOneX" class="accordion-collapse collapse show"
          aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
          <div class={`accordion-body ${s.body}`}>
          <p>Torres Construction provides an excellent quality service. We are committed to providing you with the best result that suits your needs.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class={`accordion-header ${s.header}`} id="flush-headingTwoX">
          <button class={`accordion-button collapsed ${s.button}`} type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
            What are our values?
          </button>
        </h2>
        <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
          data-mdb-parent="#accordionFlushExampleX">
          <div class={`accordion-body ${s.body}`}>
          <p>At Torres Construction, our main values ​​are:</p>
          <ul>
            <p>
              <li type='square' class={s.li}><h4>RESPECT</h4>For us, respect is the basis of all relationships that develop in the environment of the company and customers.<br></br>We respect the professional work between our team and the needs of the client.</li><br></br>
              <li type='square' class={s.li}><h4>CUSTOMER ORIENTATION</h4>We consider it key to focus on the knowledge and needs of customers, fulfilling the commitments acquired with the greatest satisfaction.</li><br></br>
              <li type='square' class={s.li}><h4>TRANSPARENCY</h4>We are honest and responsible for our actions.We generate trust and reliability to our clients.</li><br></br>
              <li type='square' class={s.li}><h4>COMMITMENT</h4>We promote the personal and professional growth of our workers, fostering a respectful and team work environment.</li><br></br>
              <li type='square' class={s.li}><h4>QUALITY</h4>We make all the necessary efforts to offer a greater variety of services, improving excellence and continuously following the necessary paths to continue advancing, investing in all those mechanisms that provide us with greater efficiency every day.</li>
            </p>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}