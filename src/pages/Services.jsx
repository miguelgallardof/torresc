import React from 'react';
//import s from '../styles/services.module.css';

export const Services = () => {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      <div className={'row g-4 py-5 row-cols-1 row-cols-lg-2'}>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-danger fs-2 mb-3">
            <svg class="logio" width="1em" height="1em"></svg>
          </div>
          <h3 class="fs-2">Mission</h3>
          <p>Provide a personalized service, satisfying the needs of our clients before, during and after the project is completed. Complying with the quality standards and deadlines set by it, satisfying our customers through the demand in quality control of our completed work.</p>
          {/* <a href="/" class="icon-link d-inline-flex align-items-center">
            Call to action
            <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg>
          </a> */}
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h3 class="fs-2">Vision</h3>
          <p>To be recognized for its excellence in the quality of our services, through responsibility and efficiency, for being a diversified and integrated company, committed and recognized for its ability to innovate, create and modernize to meet the new needs of our society.</p>
          {/* <a href="/" class="icon-link d-inline-flex align-items-center">
            Call to action
            <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg>
          </a> */}
        </div>
        
      </div>
    </div>
  )
}