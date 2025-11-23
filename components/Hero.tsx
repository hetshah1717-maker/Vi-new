import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = "Your Vi Connection is Strongest Here in Ahmedabad.".split(" ");

  return (
    <section 
      ref={containerRef}
      id={SectionId.HERO} 
      className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gray-50 overflow-hidden pt-20"
    >
      {/* Abstract Background Shapes - Clean & Professional */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-vi-purple/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-vi-red/5 blur-3xl"></div>
      </motion.div>

      <motion.div 
        style={{ opacity: opacityText }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-vi-red animate-pulse"></span>
          <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Official Mini Store • Vastrapur</span>
        </motion.div>

        {/* Staggered Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-gray-900 max-w-5xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.2em] relative"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.05, 
                ease: [0.2, 0.65, 0.3, 0.9] 
              }}
            >
              {word === "Vi" || word === "Strongest" ? (
                <span className="text-vi-purple">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-16"
        >
          Seamless 5G connectivity and instant support, right in your neighborhood.
        </motion.p>

        {/* The Start of the Connectivity Line */}
        <div className="relative h-24 w-full flex justify-center overflow-visible">
           <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
              className="w-0.5 bg-vi-red relative"
           >
              {/* Pulse Effect */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-vi-red rounded-full shadow-[0_0_10px_rgba(230,0,0,0.8)] animate-pulse"></div>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};