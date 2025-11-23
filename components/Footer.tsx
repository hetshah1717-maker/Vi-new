import React from 'react';
import { Phone, Map, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-gray-900 text-white pt-24 pb-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Details */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Visit Store Today</h2>
            <p className="text-gray-400 mb-10 max-w-md text-lg leading-relaxed">
              We are conveniently located near Vastrapur Lake. Drop by for any assistance with your Vi connection.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Map, label: 'Address', text: 'Shop No. 12, Ground Floor, City Center Complex, Near Vastrapur Lake, Ahmedabad, Gujarat 380015' },
                { icon: Phone, label: 'Phone', text: '+91 99999 99999', sub: 'Available 10 AM - 7 PM' },
                { icon: Clock, label: 'Store Timings', text: 'Mon - Sat: 10:00 AM - 9:00 PM', sub: 'Sunday: Closed' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-5">
                  <item.icon className="text-vi-red mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.label}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    {item.sub && <p className="text-sm text-gray-500 mt-1">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Action Buttons (Hidden on Mobile, shown here for desktop layout) */}
            <div className="mt-12 hidden md:flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919999999999"
                className="flex items-center justify-center space-x-2 bg-vi-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-vi-red/50"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.google.com/maps/search/?api=1&query=Vi+Store+Vastrapur+Ahmedabad" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                <Map size={20} />
                <span>Get Directions</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full min-h-[400px] bg-gray-800 rounded-3xl overflow-hidden relative group shadow-2xl ring-4 ring-white/5"
          >
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724581!2d72.5293!3d23.0350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84aa5c4c5a9b%3A0x6a0a0a0a0a0a0a0a!2sVastrapur%20Lake%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              title="Vi Store Location"
              className="grayscale hover:grayscale-0 transition-all duration-700 opacity-70 hover:opacity-100 w-full h-full"
            ></iframe>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vi Mini-Store Ahmedabad. Authorized Franchise.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2">
        <a href="tel:+919999999999" className="bg-vi-red text-white py-4 flex flex-col items-center justify-center active:bg-red-800">
          <Phone size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase">Call Now</span>
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query=Vi+Store+Vastrapur+Ahmedabad" target="_blank" rel="noreferrer" className="bg-gray-900 text-white py-4 flex flex-col items-center justify-center active:bg-black">
          <Map size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase">Navigate</span>
        </a>
      </div>
    </footer>
  );
};