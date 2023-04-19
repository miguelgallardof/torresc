import React from 'react';
import s from '../styles/services.module.css';
import image1 from '../images/service1.jpg'
import image2 from '../images/service2.jpg'
import image3 from '../images/service3.jpg'
import image4 from '../images/service4.jpg'
import image5 from '../images/service5.jpg'

export const Services = () => {
  return (
    <div className={`container col-xxl-8 px-4 py-5 ${s.container}`}>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image1} className="d-block mx-lg-auto img-fluid animation slide-out-center"
            alt="img" width="350" height="350" align="center" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-files" viewBox="0 0 16 16">
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
          </svg>
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Drywall</h2>
          <p id={s.text}>Torres Construction has the solution to correctly adapt any space in your home.{/* <br></br><br></br>See more photos of our work here */}</p>
        </div> 
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image2} className="d-block mx-lg-auto img-fluid animation slide-out-right"
            alt="img" width="350" height="350" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-paint-bucket" viewBox="0 0 16 16">
          <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
        </svg>
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Painting</h2>
          <p id={s.text}>Torres Construction, we help you choose the right tone for your home and create a more welcoming environment. For both indoor and outdoor environments.{/* <br></br><br></br>See more photos of our work here */}</p>
        </div> 
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image3} className="d-block mx-lg-auto img-fluid animation slide-out-right"
            alt="img" width="350" height="350" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-bricks" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"/>
          </svg>
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Flooring</h2>
          <p id={s.text}>Torres Construction, makes your space a more pleasant place. If you are looking for professionals with excellence in their work, you are in the right place.{/* <br></br><br></br>See more photos of our work here */}</p>
        </div> 
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image4} className="d-block mx-lg-auto img-fluid animation slide-out-right"
            alt="img" width="350" height="350" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-bookshelf" viewBox="0 0 16 16">
          <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"/>
        </svg>
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Carpentry</h2>
          <p id={s.text}>Torres Construction, makes your home a unique and personalized space. Imagining it is not enough if you are not in the right hands, guaranteed good quality work.{/* <br></br><br></br>See more photos of our work here */}</p>
        </div> 
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6"
        id ={s.content_image}>
          <img 
            src={image5} className="d-block mx-lg-auto img-fluid animation slide-out-right"
            alt="img" width="350" height="350" loading="lazy" id={s.image}/>
        </div>
        <div className="col-lg-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--main-color)" class="bi bi-house-gear" viewBox="0 0 16 16">
          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
          <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
          <h2
            className="display-5 fw-bold lh-1 mb-3"
            id={s.title}
          >
            Renovations</h2>
          <p id={s.text}>Torres Construction, makes your home a unique and personalized space. Imagining it is not enough if you are not in the right hands, guaranteed good quality work.{/* <br></br><br></br>See more photos of our work here */}</p>
        </div> 
      </div>
    </div>

  )
}