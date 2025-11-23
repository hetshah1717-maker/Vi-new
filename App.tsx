import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyLocal } from './components/WhyLocal';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-vi-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyLocal />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Scroll to top visual fix only */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-vi-red to-vi-purple z-50"></div>
    </div>
  );
}

export default App;