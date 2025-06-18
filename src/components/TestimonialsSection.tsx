import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Quote } from "lucide-react"; // optional icon if using lucide-react

const TestimonialsSection: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(testimonialsRef);

  return (
    <section
      ref={testimonialsRef}
      id="testimonials"
      className={`py-20 bg-gradient-to-br from-blue-50 to-green-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            💬 Parent & Alumni Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our community says about the Aabha Vidya Niketan
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Parent Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="absolute top-4 right-4 text-blue-200 text-5xl opacity-20">
              <Quote />
            </div>
            <p className="text-lg text-gray-700 italic mb-6">
              “The school helped my daughter grow into a confident and
              responsible individual. The support from teachers is truly
              heartwarming.”
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 text-xl">
                👩‍👧
              </div>
              <div>
                <p className="text-gray-900 font-semibold">
                  Mrs. Anjali Sharma
                </p>
                <p className="text-sm text-gray-500">Parent</p>
              </div>
            </div>
          </div>

          {/* Alumni Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="absolute top-4 right-4 text-green-200 text-5xl opacity-20">
              <Quote />
            </div>
            <p className="text-lg text-gray-700 italic mb-6">
              “I owe my success in competitive exams to the excellent mentorship
              and academic rigor I received at AVN.”
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4 text-xl">
                🎓
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Rohit Mehta</p>
                <p className="text-sm text-gray-500">Alumnus, IIT Bombay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
