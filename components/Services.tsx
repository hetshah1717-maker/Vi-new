import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Zap, CreditCard, Headphones, FileText, Globe } from 'lucide-react';
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    rotate: 5, 
    y: 50 
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      delay: i * 0.1, // Staggered delay
    }
  })
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id={SectionId.SERVICES} className="pt-24 pb-64 md:pt-32 md:pb-96 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
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
            Services at Ahmedabad Store
          </motion.h3>
          <div className="w-24 h-2 bg-vi-red mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }} 
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`bg-white rounded-3xl p-8 cursor-pointer transition-colors duration-300 border border-gray-100 ${
                activeService === service.id 
                  ? 'shadow-2xl ring-4 ring-vi-red/20 border-vi-red' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-4 rounded-2xl transition-colors duration-300 ${activeService === service.id ? 'bg-vi-red text-white' : 'bg-red-50 text-vi-red'}`}
                >
                  <service.icon size={32} />
                </motion.div>
                {activeService === service.id && (
                   <span className="text-xs font-bold text-vi-red bg-red-50 px-3 py-1 rounded-full animate-pulse border border-red-100">
                     Selected
                   </span>
                )}
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 font-medium">{service.description}</p>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-100 mt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {service.detailedInfo}
                      </p>
                      <button className="mt-6 text-vi-red text-sm font-black hover:underline flex items-center uppercase tracking-wide">
                        Inquire at Store <span className="ml-2 text-lg">&rarr;</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 opacity-10 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" className="text-vi-purple fill-current" />
            </pattern>
            <rect width="400" height="400" fill="url(#dots)" />
         </svg>
      </div>

      {/* Bottom Wave */}
      {/* Max height constrained and padding increased to ensure it sits BELOW cards */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 rotate-180 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto max-h-[150px] md:max-h-[320px] text-white fill-current">
          <path fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,138.7C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};