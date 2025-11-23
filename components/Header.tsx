import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { SectionId } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
          <div className="bg-vi-red w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            Vi
          </div>
          <div className="flex flex-col leading-none text-gray-900">
            <span className="font-bold tracking-tight">Mini Store</span>
            <span className="text-xs font-medium">Ahmedabad</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Services', id: SectionId.SERVICES },
            { label: 'Why Local', id: SectionId.WHY_LOCAL },
            { label: 'Reviews', id: SectionId.TESTIMONIALS },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium transition-colors text-gray-700 hover:text-vi-red"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-vi-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-lg flex items-center space-x-1"
          >
            <MapPin size={16} />
            <span>Visit Store</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl p-4 flex flex-col space-y-4 animate-fade-in-down">
          {[
            { label: 'Services', id: SectionId.SERVICES },
            { label: 'Why Local', id: SectionId.WHY_LOCAL },
            { label: 'Reviews', id: SectionId.TESTIMONIALS },
            { label: 'Contact', id: SectionId.CONTACT },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-800 font-medium py-2 border-b border-gray-100 last:border-0 hover:text-vi-red"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};