import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';
import { SectionId } from '../types';

// Canvas Tunnel Effect
const NetworkTunnel: React.FC<{ scrollProgress: any }> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Tunnel Parameters
    const numRings = 30;
    const ringSpacing = 50; // visual distance between rings
    let offset = 0; // Animation offset
    
    // Store ring data
    const rings: { z: number, rotation: number }[] = [];
    for(let i=0; i<numRings; i++) {
      rings.push({ z: i * ringSpacing, rotation: i * 0.1 });
    }

    const draw = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(46, 2, 73, 0.4)'; // Vi Purple base with trail
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Get current scroll influence (0 to 1)
      const scrollVal = scrollProgress.get();
      // Speed increases with scroll
      const speed = 2 + (scrollVal * 40); 
      
      offset += speed;
      if(offset > ringSpacing) offset -= ringSpacing;

      // Draw Tunnel
      ctx.lineWidth = 2;
      
      for (let i = numRings - 1; i >= 0; i--) {
        const ring = rings[i];
        // Calculate visual Z position (depth)
        // rings move towards camera (negative Z is towards viewer in this logic)
        // We simulate this by reducing the 'z' index virtually
        
        let visualZ = (ring.z - offset);
        if (visualZ < 0) visualZ += (numRings * ringSpacing); // Loop back
        
        // Perspective projection
        const fov = 300;
        const scale = fov / (fov + visualZ);
        
        // Dont draw if too close or behind
        if (scale > 20 || scale < 0) continue;

        const radius = 100 * scale + (scrollVal * 500 * scale); // Tunnel widens as you scroll "in"
        const opacity = Math.min(1, (visualZ / 500)); // Fade deep rings
        
        ctx.beginPath();
        const sides = 6;
        const rot = ring.rotation + (scrollVal * Math.PI); // Rotate based on scroll
        
        for (let j = 0; j <= sides; j++) {
            const angle = (j * 2 * Math.PI / sides) + rot;
            const x = centerX + Math.cos(angle) * radius * width/height; // Aspect correction
            const y = centerY + Math.sin(angle) * radius;
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        
        // Color transition from Purple (deep) to Red (close)
        const r = 230; // Vi Red R
        const g = 0;
        const b = 0 + (visualZ / 10); // More blue/purple in back
        
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${1 - opacity + 0.2})`;
        ctx.stroke();
      }

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
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll over the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Transforms for the "Scroll-Jack" effect
  const textScale = useTransform(smoothScroll, [0, 0.4], [1, 50]); // Text zooms into face
  const textOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]); // Fades out quickly
  const overlayOpacity = useTransform(smoothScroll, [0.7, 1], [0, 1]); // White out at end

  const titleText = "Your Vi Connection is Strongest Here in Ahmedabad.";

  return (
    <section 
      ref={containerRef}
      id={SectionId.HERO} 
      className="relative h-[250vh]" // Tall container for scroll space
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-vi-purple flex flex-col justify-center items-center">
        
        {/* Dynamic Tunnel Background */}
        <NetworkTunnel scrollProgress={smoothScroll} />
        
        {/* Overlay Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Content Container - Fixed center */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity }}
          className="container mx-auto px-4 relative z-30 flex flex-col items-center justify-center text-center h-full origin-center"
        >
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
            <span className="tracking-wide text-white">Official Vi Mini-Store • Ahmedabad</span>
          </motion.div>

          {/* H1 Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8 text-white">
            {titleText}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Experience seamless <span className="font-bold text-yellow-400">5G connectivity</span>, instant activation, and personalized support right in Vastrapur.
          </motion.p>
          
          <div className="animate-bounce absolute bottom-10 text-white/50 flex flex-col items-center">
             <p className="text-sm uppercase tracking-widest mb-2">Scroll to Connect</p>
             <div className="w-1 h-8 bg-white/30 rounded-full overflow-hidden">
                <div className="w-full h-1/2 bg-vi-red animate-[ping_1.5s_infinite]"></div>
             </div>
          </div>
        </motion.div>

        {/* Transition Flash to White at bottom of scroll to blend with next section */}
        <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-white z-40 pointer-events-none"
        />
      </div>
    </section>
  );
};