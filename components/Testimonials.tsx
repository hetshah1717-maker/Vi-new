import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial, SectionId } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Rahul Patel", location: "Navrangpura", text: "Excellent service! Got my SIM ported to Vi in just 15 minutes. The staff is very helpful." },
  { id: 2, name: "Priya Shah", location: "Satellite", text: "Network coverage in Ahmedabad is amazing now with 5G. The store staff helped me upgrade instantly." },
  { id: 3, name: "Amit Trivedi", location: "Vastrapur", text: "Best telecom support in the city. They resolved my billing issue right away. Highly recommended." },
  { id: 4, name: "Sneha Desai", location: "CG Road", text: "Very clean store and professional behavior. Much better than waiting on call center hold." },
  { id: 5, name: "Vikram Singh", location: "Gota", text: "Fastest 5G speeds I've experienced in Gujarat. Thanks for the quick setup!" },
];

export const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-vi-purple text-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Happy Ahmedabad Customers</h2>
        <p className="text-white/70 text-xl">Trusted by thousands across Gujarat</p>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

      <div className="relative w-full overflow-hidden z-10 py-10">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 z-20 bg-gradient-to-r from-vi-purple to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 z-20 bg-gradient-to-l from-vi-purple to-transparent pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex animate-scroll hover:pause w-max">
          {/* Triple the list for smooth loop on wide screens */}
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              className="w-[350px] md:w-[450px] mx-6 group"
            >
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300 h-full relative">
                <Quote className="absolute top-6 right-6 text-white/10" size={48} />
                
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vi-red to-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-white/60 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};