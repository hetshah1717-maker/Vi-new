import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Smartphone, Zap, CreditCard, Headphones, FileText, Globe, ArrowRight } from 'lucide-react';
import { ServiceItem, SectionId } from '../types';

const services: ServiceItem[] = [
  {
    id: '5g',
    title: 'Vi 5G Upgrade',
    description: 'Experience blazing fast speeds.',
    detailedInfo: 'Upgrade your existing SIM to Vi 5G instantly. Enjoy seamless streaming, gaming, and downloads with Ahmedabad’s strongest 5G network.',
    icon: Zap,
  },
  {
    id: 'new-sim',
    title: 'New Connection',
    description: 'Get a number of your choice.',
    detailedInfo: 'Start your journey with Vi. Pick a fancy number or port your existing number (MNP) to Vi with zero downtime. Activation in 15 minutes.',
    icon: Smartphone,
  },
  {
    id: 'postpaid',
    title: 'Postpaid Plans',
    description: 'Family plans & OTT benefits.',
    detailedInfo: 'Choose from our premium REDX plans featuring unlimited data, airport lounge access, and free subscriptions to Netflix, Prime, and Disney+ Hotstar.',
    icon: FileText,
  },
  {
    id: 'bill',
    title: 'Bill Payments',
    description: 'Zero fee instant payments.',
    detailedInfo: 'Pay your postpaid bills or recharge your prepaid number securely at our kiosk. We accept all payment modes including UPI and Cards.',
    icon: CreditCard,
  },
  {
    id: 'roaming',
    title: 'Intl. Roaming',
    description: 'Travel the world worry-free.',
    detailedInfo: 'Flying out of Ahmedabad Airport? Get the best international roaming packs for US, UK, UAE and 100+ countries before you fly.',
    icon: Globe,
  },
  {
    id: 'support',
    title: 'Customer Care',
    description: 'Resolve queries instantly.',
    detailedInfo: 'Face-to-face support for SIM replacement, billing disputes, network issues, and value-added service activation.',
    icon: Headphones,
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this section for the "Line"
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={sectionRef} id={SectionId.SERVICES} className="pt-24 pb-64 md:pt-32 md:pb-96 bg-gray-50 relative overflow-hidden">
      
      {/* THE FIBER OPTIC LINE (Background) */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 h-full z-0">
         {/* Grey Track */}
         <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full" />
         {/* Animated Vi Red Fill */}
         <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-vi-red via-red-600 to-vi-purple shadow-[0_0_15px_rgba(230,0,0,0.6)] rounded-full"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.div
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-vi-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg ring-4 ring-white z-20 relative"
          >
            <Zap className="animate-pulse" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-vi-purple text-xl font-bold tracking-wider uppercase mb-3"
          >
            Our Offerings
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Delivered via Vi SuperNet
          </motion.h3>
        </div>

        <div className="flex flex-col space-y-12 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col ml-12 md:ml-0`}
            >
              {/* Connector Line (Desktop) */}
              <div className={`hidden md:block absolute top-1/2 w-1/2 h-0.5 bg-gray-200 -z-10 ${isEven ? 'right-0 origin-right' : 'left-0 origin-left'}`}>
                  <motion.div 
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="w-full h-full bg-vi-red shadow-[0_0_10px_rgba(230,0,0,0.4)]"
                  />
                  {/* Connection Dot */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-vi-red border-4 border-white shadow-md ${isEven ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`} />
              </div>

              {/* Connector Line (Mobile) */}
              <div className="md:hidden absolute top-1/2 -left-12 w-12 h-0.5 bg-vi-red">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-vi-red" />
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="hidden md:block w-5/12" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`w-full md:w-5/12 bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 border border-gray-100 relative group
                  ${activeService === service.id 
                    ? 'shadow-2xl ring-2 ring-vi-red border-transparent' 
                    : 'shadow-lg hover:shadow-xl'
                  }
                `}
              >
                 {/* Flash Effect on Appear */}
                 <motion.div 
                    initial={{ opacity: 0.5, scale: 1.2 }}
                    whileInView={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-vi-red/5 rounded-3xl pointer-events-none"
                 />

                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl transition-colors duration-300 ${activeService === service.id ? 'bg-vi-red text-white' : 'bg-red-50 text-vi-red'}`}>
                    <service.icon size={28} />
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${activeService === service.id ? 'rotate-90 bg-gray-100' : 'bg-transparent'}`}>
                    <ArrowRight size={16} className="text-gray-400" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 font-medium text-sm">{service.description}</p>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 mt-4">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {service.detailedInfo}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

            </motion.div>
          )})}
        </div>
      </div>
      
      {/* Bottom Wave - Transition */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 rotate-180 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto max-h-[150px] md:max-h-[320px] text-white fill-current">
          <path fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};