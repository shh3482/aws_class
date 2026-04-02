// src/components/4_Home/HomePage.jsx

import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ChatDemo from './ChatDemo';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import FAQ from './FAQ';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ChatDemo />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </>
  );
}

export default HomePage;
