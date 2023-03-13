import React from 'react';
import '../styles/carousel.css';
import '../js/carousel'

export const Carousel = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                <div class="MultiCarousel-inner">
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="pad15">
                            <p class="lead">Multi Item Carousel</p>
                            <p>₹ 1</p>
                            <p>₹ 6000</p>
                            <p>50% off</p>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary leftLst">Izq</button>
                <button class="btn btn-primary rightLst">Der</button>
            </div>
      </div>
      <div class="row">
          <div class="col-md-12 text-center">
              <br/><br/><br/>
              <hr/>
              <p>Settings</p>
              <p>Change data items for xs,sm,md and lg display items respectively. Ex:data-items="1,3,5,6"</p>
              <p>Change data slide for slides per click Ex:data-slide="1"</p>
          </div>
      </div>
    </div>
  )
}