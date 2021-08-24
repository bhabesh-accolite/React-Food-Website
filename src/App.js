import React from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel1 from './components/Products/Carousel1';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel2 from './components/Products/Carousel2';

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Carousel1 />
      <Carousel2 />
      <Footer />
    </>
  );
}

export default App;
