import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial, SectionId } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Rahul Patel", location: "Navrangpura", text: "Process was seamless. Staff at Vastrapur branch knows their stuff." },
  { id: 2, name: "Priya Shah", location: "Satellite", text: "Much better experience than the call center. Fixed my billing in 5 mins." },
  { id: 3, name: "Amit Trivedi", location: "Vastrapur", text: "The network speed in this area is unmatched. Glad I switched to Vi." },
];

export const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Ahmedabad</h2>
          <p className="text-gray-500">Real experiences from your neighbors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="group cursor-hover-trigger relative p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              {/* Subtle Red Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-vi-red/20 transition-colors pointer-events-none"></div>

              <div className="flex text-yellow-400 mb-4 space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">"{review.text}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-vi-purple text-white flex items-center justify-center font-bold text-sm">
                  {review.name[0]}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};