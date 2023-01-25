import React, { Suspense } from 'react';
import {Header, Carousel} from  '../components';

export const Home = () => {
  return (
    <>
    <Suspense fallback={<span>Loading...</span>}></Suspense>
      <Header />
      <Carousel />
    </>
  )
}