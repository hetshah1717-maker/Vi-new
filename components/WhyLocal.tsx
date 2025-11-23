import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';

export const WhyLocal: React.FC = () => {
  const sectionRef = useRef(null);
  
  // Map Zoom Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const mapFilter = useTransform(scrollYProgress, [0, 1], ["blur(4px) grayscale(100%)", "blur(0px) grayscale(0%)"]);
  const pinY = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const pinOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  // Line continuing from previous section
  const lineProgress = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id={SectionId.WHY_LOCAL} className="py-32 bg-gray-50 relative overflow-hidden">
      
      {/* Continuing Connectivity Line */}
      <div className="absolute top-0 left-0 md:left-1/2 w-full md:w-0.5 md:-translate-x-1/2 h-32 hidden md:block">
        <div className="w-full h-full bg-gray-200"></div>
        <motion.div 
           style={{ height: lineProgress }}
           className="absolute top-0 left-0 w-full bg-vi-red shadow-[0_0_10px_rgba(230,0,0,0.3)]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-vi-purple font-semibold tracking-wide uppercase mb-4 text-sm">Local Advantage</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Precision Support <br/>in <span className="text-vi-red">Ahmedabad</span>
              </h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                Digital is fast, but sometimes you need a human touch. Our Vastrapur experts provide instant resolutions for your complex network needs.
              </p>

              <div className="space-y-6">
                {[
                  "Personalized Gujarati & Hindi Support",
                  "Instant SIM Activation & MNP",
                  "Authorized Documentation Center"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-vi-purple/20 transition-colors"
                  >
                    <CheckCircle2 className="text-vi-purple flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Visual */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 relative">
             {/* Connection Point */}
             <div className="absolute top-[-8rem] left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-vi-red to-transparent hidden lg:block z-0"></div>

             <motion.div 
                style={{ scale: mapScale, filter: mapFilter }}
                className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 z-10"
             >
                {/* Abstract Map Layer */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724581!2d72.5293!3d23.0350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84aa5c4c5a9b%3A0x6a0a0a0a0a0a0a0a!2sVastrapur%20Lake%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  title="Map"
                  className="opacity-80"
                ></iframe>

                {/* The Pin Lock Animation */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ y: pinY, opacity: pinOpacity }}
                >
                   <div className="relative">
                      <MapPin size={64} className="text-vi-red fill-current drop-shadow-xl" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-1 bg-black/20 blur-sm rounded-full"></div>
                   </div>
                </motion.div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};