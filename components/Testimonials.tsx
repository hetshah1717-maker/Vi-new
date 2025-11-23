import React from 'react';
import { Star } from 'lucide-react';
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
    <section id={SectionId.TESTIMONIALS} className="py-20 bg-vi-purple text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Happy Ahmedabad Customers</h2>
        <p className="text-white/70">Trusted by thousands across Gujarat</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-vi-purple to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-vi-purple to-transparent"></div>

        {/* Marquee Container */}
        <div className="flex animate-scroll hover:pause w-[200%]">
          {/* Double the list for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 mx-4"
            >
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors h-full">
                <div className="flex space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 italic mb-4">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-vi-red to-orange-500 rounded-full flex items-center justify-center font-bold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-white/60">{review.location}</p>
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
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};