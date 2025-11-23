import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Zap, CreditCard, Headphones, FileText, Globe, ArrowRight } from 'lucide-react';
import { ServiceItem, SectionId } from '../types';

const services: ServiceItem[] = [
  {
    id: '5g',
    title: 'Vi 5G Upgrade',
    description: 'Blazing fast speeds.',
    detailedInfo: 'Instant upgrade to 5G.',
    icon: Zap,
  },
  {
    id: 'new-sim',
    title: 'New Connection',
    description: 'Choice numbers available.',
    detailedInfo: 'Activation in 15 mins.',
    icon: Smartphone,
  },
  {
    id: 'postpaid',
    title: 'Postpaid Plans',
    description: 'Family & OTT benefits.',
    detailedInfo: 'Netflix & Prime included.',
    icon: FileText,
  },
  {
    id: 'bill',
    title: 'Bill Payments',
    description: 'Zero fee payments.',
    detailedInfo: 'Secure & instant.',
    icon: CreditCard,
  },
  {
    id: 'roaming',
    title: 'Intl. Roaming',
    description: 'Travel worry-free.',
    detailedInfo: 'Best rates for 100+ countries.',
    icon: Globe,
  },
  {
    id: 'support',
    title: 'Customer Care',
    description: 'Instant resolution.',
    detailedInfo: 'Face-to-face support.',
    icon: Headphones,
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // The main line draws down as we scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id={SectionId.SERVICES} className="py-24 bg-white relative overflow-hidden">
      
      {/* Central Connectivity Line Container */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-full md:w-0.5 md:-translate-x-1/2 z-0 hidden md:block">
        {/* Background Track */}
        <div className="absolute inset-0 bg-gray-100 w-full h-full"></div>
        {/* Animated Fill */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-0 w-full bg-vi-red shadow-[0_0_10px_rgba(230,0,0,0.3)] origin-top"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vi-red text-sm font-bold tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900"
          >
            Connected by Vi SuperNet
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-24">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isLeft={isLeft} 
                index={index} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: ServiceItem, isLeft: boolean, index: number }> = ({ service, isLeft, index }) => {
  const cardRef = useRef(null);
  
  return (
    <div 
      ref={cardRef}
      className={`relative flex ${isLeft ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} justify-center`}
    >
      {/* Branching Line Animation (Desktop Only) */}
      <motion.div 
        className={`hidden md:block absolute top-1/2 h-[1px] bg-vi-red origin-${isLeft ? 'right' : 'left'} z-0`}
        style={{ 
           width: '64px', // length of the connector
           [isLeft ? 'right' : 'left']: 0,
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        {/* The Connection Dot on the Main Line */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-vi-red ${isLeft ? 'right-[-4px]' : 'left-[-4px]'}`}></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group cursor-hover-trigger w-full max-w-md bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-vi-purple/5 relative overflow-hidden"
      >
        {/* Subtle Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-vi-red/0 to-vi-red/0 group-hover:from-vi-red/5 group-hover:to-transparent transition-all duration-500"></div>

        <div className="relative z-10">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-vi-purple group-hover:text-vi-red group-hover:scale-110 transition-all duration-300">
            <service.icon size={24} />
          </div>
          
          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-vi-red transition-colors">{service.title}</h4>
          <p className="text-gray-500 mb-6">{service.description}</p>
          
          <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-vi-purple transition-colors">
            <span>Learn more</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
