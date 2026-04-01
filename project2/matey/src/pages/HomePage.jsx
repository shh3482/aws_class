import React from 'react';
import Hero from '../components/4_Home/Hero';
import Features from '../components/4_Home/Features';
import ChatDemo from '../components/4_Home/ChatDemo';
import HowItWorks from '../components/4_Home/HowItWorks';
import Pricing from '../components/4_Home/Pricing';
import FAQ from '../components/4_Home/FAQ';
import DownloadBanner from '../components/4_Home/DownloadBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ChatDemo />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <DownloadBanner />
    </>
  );
}
