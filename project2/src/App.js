import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ChatDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
