import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UserCheck, Clock, ShieldCheck } from 'lucide-react';
import { SectionId } from '../types';

export const WhyLocal: React.FC = () => {
  return (
    <section id={SectionId.WHY_LOCAL} className="py-24 bg-white overflow-hidden relative">
      
      {/* Fiber Line Termination */}
      <div className="absolute left-8 md:left-1/2 top-0 h-32 w-1 md:-ml-0.5 bg-gradient-to-b from-vi-purple to-transparent z-0 opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-vi-red font-bold tracking-wide uppercase mb-3">The Ahmedabad Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                Why visit our <br/><span className="text-vi-purple">Physical Mini-Store?</span>
              </h3>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                Skip the call center queues. At our Vastrapur location, you get personalized attention from local experts who understand your network needs in Gujarat.
              </p>

              <div className="space-y-8">
                {[
                  { icon: UserCheck, title: "Personalized Service", desc: "Speak to a real person who understands Gujarati and Hindi." },
                  { icon: Clock, title: "Instant Activation", desc: "Walk out with a working SIM in minutes, not days." },
                  { icon: ShieldCheck, title: "Trusted Expertise", desc: "Authorized Vi partner ensuring secure document handling." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="flex items-start space-x-5 group"
                  >
                    <div className="flex-shrink-0 bg-vi-purple/5 p-4 rounded-2xl group-hover:bg-vi-purple/10 transition-colors">
                      <item.icon className="text-vi-purple" size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-vi-red transition-colors">{item.title}</h4>
                      <p className="text-gray-600 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated Map Visual - Pin Drop Effect */}
          <div className="lg:w-1/2 relative w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl ring-8 ring-gray-50"
            >
               <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-gray-100 border border-gray-200 group">
                 {/* Abstract Map Roads */}
                 <div className="absolute inset-0 opacity-40">
                   <div className="absolute top-1/2 left-0 w-full h-12 bg-gray-300 rotate-12 transform -translate-y-1/2 scale-110"></div>
                   <div className="absolute top-0 left-1/3 w-12 h-full bg-gray-300 scale-110"></div>
                   <div className="absolute top-0 right-1/4 w-6 h-full bg-gray-300 -rotate-12 scale-110"></div>
                 </div>

                 {/* Landmarks */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5 }}
                   className="absolute top-16 right-16 bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full font-bold shadow-sm border border-blue-100 z-10"
                 >
                   Vastrapur Lake
                 </motion.div>

                 {/* Store Location Pin Animation - The Drop */}
                 <div className="absolute inset-0 flex items-center justify-center z-20 pb-8">
                   <div className="relative flex flex-col items-center">
                     <motion.div
                       initial={{ y: -500, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                       className="relative z-20"
                     >
                       <MapPin size={84} className="text-vi-red drop-shadow-2xl fill-vi-red text-white" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                     </motion.div>
                     
                     {/* Impact Ripple Effect */}
                     <div className="absolute top-16 w-full flex justify-center z-0">
                        <span className="flex h-24 w-24 relative">
                          <motion.span 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            className="absolute inline-flex h-full w-full rounded-full bg-vi-red"
                          ></motion.span>
                          <motion.span 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.4 }}
                            className="relative inline-flex rounded-full h-24 w-24 bg-vi-red opacity-20"
                          ></motion.span>
                        </span>
                     </div>

                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.8 }}
                       className="mt-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border border-white/50 text-center min-w-[200px]"
                     >
                       <p className="font-extrabold text-gray-900 text-lg">Vi Mini Store</p>
                       <p className="text-sm text-gray-600 font-medium">Open until 9:00 PM</p>
                       <div className="mt-2 text-xs font-bold text-vi-red uppercase tracking-wider">Strongest Signal Here</div>
                     </motion.div>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};