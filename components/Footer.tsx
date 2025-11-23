import React from 'react';
import { Phone, Map, Clock, Mail, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Visit Store Today</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              We are conveniently located near Vastrapur Lake. Drop by for any assistance with your Vi connection.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Map className="text-vi-red mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-300">
                    Shop No. 12, Ground Floor, City Center Complex,<br />
                    Near Vastrapur Lake, Ahmedabad, Gujarat 380015
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-vi-red mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-300">+91 99999 99999</p>
                  <p className="text-xs text-gray-500 mt-1">Available 10 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-vi-red mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Store Timings</h4>
                  <p className="text-gray-300">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919999999999"
                className="flex items-center justify-center space-x-2 bg-vi-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-vi-red/50"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Vi+Store+Vastrapur+Ahmedabad" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                <Map size={20} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Map Embed (Using a static friendly iframe or placeholder to avoid API key issues) */}
          <div className="h-full min-h-[400px] bg-gray-800 rounded-2xl overflow-hidden relative group">
            {/* Using a generic Google Maps embed that often works without specific signed keys for simple place queries or search */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724581!2d72.5293!3d23.0350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84aa5c4c5a9b%3A0x6a0a0a0a0a0a0a0a!2sVastrapur%20Lake%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              title="Vi Store Location"
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-4 border-gray-800/50 rounded-2xl"></div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vi Mini-Store Ahmedabad. Authorized Franchise.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-700">
          <p>Disclaimer: This is a generated landing page concept. Not officially affiliated with Vodafone Idea Limited.</p>
        </div>
      </div>
    </footer>
  );
};