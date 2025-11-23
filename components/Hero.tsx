import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';
import { SectionId } from '../types';

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none" />;
};

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 }
  }
};

const letterAnimation = {
  hidden: { y: 50, opacity: 0, rotateX: -90 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 }
  }
};

export const Hero: React.FC = () => {
  const titleText = "Your Vi Connection is Strongest Here in Ahmedabad.";
  const words = titleText.split(" ");

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-vi-purple pt-32 pb-48 md:pb-80"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vi-red via-[#8a1c58] to-vi-purple animate-gradient-xy" />
      <ParticleNetwork />
      
      {/* Overlay Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="tracking-wide">Official Vi Mini-Store • Ahmedabad</span>
          </motion.div>

          {/* H1 Headline - Staggered Reveal */}
          <motion.h1 
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8"
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-2 whitespace-nowrap">
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={letterAnimation} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience seamless <span className="font-bold text-yellow-400">5G connectivity</span>, instant activation, and personalized support right in Vastrapur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              animate={{ 
                boxShadow: [
                  "0 0 0 0px rgba(255, 255, 255, 0.6)", 
                  "0 0 0 20px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
              className="group relative px-10 py-5 bg-white text-vi-red font-bold rounded-full text-xl shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 active:scale-95 flex items-center space-x-3 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Get Directions</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>
            
            <button 
               onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-vi-purple/30 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full text-lg hover:bg-vi-purple/50 transition-all flex items-center space-x-3 hover:border-white/60 w-full sm:w-auto justify-center"
            >
              <Wifi size={24} />
              <span>Explore Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Abstract Flow Animation Bottom - Wave Separator */}
      {/* Restricting height to prevent overlap */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto max-h-[150px] md:max-h-[320px] text-gray-50 fill-current translate-y-1">
          <path fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};