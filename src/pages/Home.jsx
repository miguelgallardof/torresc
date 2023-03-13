import React from 'react';
import {Cover, /* Slider, */ Hero, Portfolio, Carousel } from  '../components';

export const Home = () => {
  return (
    <>
      <Cover />
      <Hero />
      <Portfolio />
      {/* <Slider /> */}
      <Carousel />
    </>
  )
}