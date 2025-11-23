import React from 'react';
import { Phone, Map, Clock, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Vi Mini Store Ahmedabad</h2>
            <div className="flex items-start space-x-4 cursor-hover-trigger hover:text-white transition-colors">
              <Map className="text-vi-red mt-1" size={20} />
              <p>Shop 12, Ground Floor, City Center,<br/>Near Vastrapur Lake, Ahmedabad, 380015</p>
            </div>
            <div className="flex items-center space-x-4 cursor-hover-trigger hover:text-white transition-colors">
              <Phone className="text-vi-red" size={20} />
              <p>+91 99999 99999</p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-vi-red" size={20} />
              <p>10:00 AM - 9:00 PM (Mon-Sat)</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end space-y-4">
            <a 
              href="tel:+919999999999"
              className="cursor-hover-trigger group w-full md:w-auto px-8 py-4 bg-vi-red text-white font-bold rounded-lg transition-all hover:bg-red-700 flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Store</span>
            </a>
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-hover-trigger group w-full md:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-lg transition-all hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <Map size={18} />
              <span>Get Directions</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vi Mini Store Vastrapur. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};