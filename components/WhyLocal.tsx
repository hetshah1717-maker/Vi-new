import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UserCheck, Clock, ShieldCheck } from 'lucide-react';
import { SectionId } from '../types';

export const WhyLocal: React.FC = () => {
  return (
    <section id={SectionId.WHY_LOCAL} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-vi-red font-bold tracking-wide uppercase mb-2">The Ahmedabad Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why visit our Physical Mini-Store?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Skip the call center queues. At our Vastrapur location, you get personalized attention from local experts who understand your network needs in Gujarat.
            </p>

            <div className="space-y-6">
              {[
                { icon: UserCheck, title: "Personalized Service", desc: "Speak to a real person who understands Gujarati and Hindi." },
                { icon: Clock, title: "Instant Activation", desc: "Walk out with a working SIM in minutes, not days." },
                { icon: ShieldCheck, title: "Trusted Expertise", desc: "Authorized Vi partner ensuring secure document handling." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 bg-vi-purple/10 p-3 rounded-full">
                    <item.icon className="text-vi-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Map Visual */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gray-100 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden aspect-square md:aspect-video flex items-center justify-center"
            >
               {/* Abstract Map Roads */}
               <div className="absolute inset-0 opacity-30">
                 <div className="absolute top-1/2 left-0 w-full h-8 bg-gray-300 rotate-12 transform -translate-y-1/2"></div>
                 <div className="absolute top-0 left-1/3 w-8 h-full bg-gray-300"></div>
                 <div className="absolute top-0 right-1/4 w-4 h-full bg-gray-300 -rotate-12"></div>
               </div>

               {/* Landmarks */}
               <div className="absolute top-10 right-10 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold shadow-sm">
                 Vastrapur Lake
               </div>
               <div className="absolute bottom-10 left-10 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded font-bold shadow-sm">
                 CG Road
               </div>

               {/* Store Location Pin Animation */}
               <div className="relative z-10 flex flex-col items-center">
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                 >
                   <MapPin size={48} className="text-vi-red drop-shadow-lg fill-current" />
                 </motion.div>
                 
                 {/* Ripple Effect */}
                 <div className="absolute top-10 w-full flex justify-center">
                    <span className="flex h-8 w-8 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vi-red opacity-75"></span>
                    </span>
                 </div>

                 <div className="mt-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-center">
                   <p className="font-bold text-gray-900">Vi Store</p>
                   <p className="text-xs text-gray-500">Ahmedabad, Gujarat</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};