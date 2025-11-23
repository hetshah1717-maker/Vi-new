import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vi-red via-[#8a1c58] to-vi-purple animate-gradient-xy" />
      
      {/* Overlay pattern for texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/30"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Official Vi Mini-Store • Ahmedabad</span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Your Vi Connection is <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
              Strongest Here
            </span> in Ahmedabad.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience seamless 5G connectivity, instant SIM activation, and personalized support right in your neighborhood near Vastrapur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white text-vi-red font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center space-x-2 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Get Directions</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              
              {/* Pulse Effect Ring */}
              <span className="absolute inset-0 rounded-full border-2 border-white opacity-50 animate-ping"></span>
            </button>
            
            <button 
               onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-vi-purple/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-vi-purple/60 transition-all flex items-center space-x-2"
            >
              <Wifi size={20} />
              <span>Explore Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Abstract Flow Animation Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};