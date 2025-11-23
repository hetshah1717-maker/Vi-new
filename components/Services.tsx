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
    icon: FileText, // Using FileText as proxy for Plan
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

  return (
    <section id={SectionId.SERVICES} className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-vi-purple text-lg font-semibold tracking-wide uppercase mb-2">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Services at Ahmedabad Store</h3>
          <div className="w-20 h-1 bg-vi-red mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border border-gray-100 ${
                activeService === service.id 
                  ? 'shadow-2xl ring-2 ring-vi-red scale-[1.02]' 
                  : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${activeService === service.id ? 'bg-vi-red text-white' : 'bg-red-50 text-vi-red'}`}>
                  <service.icon size={28} />
                </div>
                {activeService === service.id && (
                   <span className="text-xs font-bold text-vi-red bg-red-50 px-2 py-1 rounded-full animate-pulse">
                     Selected
                   </span>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-100 mt-2">
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {service.detailedInfo}
                      </p>
                      <button className="mt-4 text-vi-red text-sm font-bold hover:underline">
                        Inquire at Store &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots background */}
      <div className="absolute top-20 right-0 opacity-20 pointer-events-none">
         <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" className="text-vi-red fill-current" />
            </pattern>
            <rect width="200" height="200" fill="url(#dots)" />
         </svg>
      </div>
    </section>
  );
};