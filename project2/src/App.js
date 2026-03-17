import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeChat, setActiveChat] = useState(false);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero onStartChat={() => setActiveChat(true)} />
        <Features />
        <HowItWorks />
        <ChatDemo isActive={activeChat} onOpen={() => setActiveChat(true)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
