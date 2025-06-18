import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ExploreSection: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  const isExploreVisible = useIntersectionObserver(exploreRef);

  return (
    <section
      ref={exploreRef}
      id="explore"
      className={`py-20 bg-white transition-all duration-1000 ${
        isExploreVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our School
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our campus and discover the facilities that
            make Aabha Vidya Niketan special.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20campus%20aerial%20view%2C%20futuristic%20educational%20architecture%2C%20green%20spaces%2C%20sports%20facilities%2C%20innovative%20building%20design%20with%20blue%20and%20green%20color%20elements&width=600&height=400&seq=14&orientation=landscape"
                alt="Campus Overview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/80 backdrop-blur-sm text-blue-600 p-4 rounded-full shadow-lg hover:bg-white transition-colors duration-300">
                  <span className="text-2xl">▶</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Virtual Campus Tour
            </h3>
            <p className="text-gray-600 mb-6">
              Experience our campus from anywhere in the world with our
              interactive virtual tour. Explore our classrooms, facilities, and
              more.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "🎥",
                  text: "Smart Digital Classrooms with audio-visual tools",
                },
                {
                  icon: "🏛️",
                  text: "Multipurpose Auditorium for seminars and cultural events",
                },
                {
                  icon: "🏏",
                  text: "Sports Ground for cricket, volleyball, badminton, and athletics",
                },
                {
                  icon: "🧸",
                  text: "Dedicated Kids’ Play Area for pre-primary",
                },
                {
                  icon: "📚",
                  text: "Library with 5,000+ books and e-learning resources",
                },
                {
                  icon: "🛡️",
                  text: "Fully Secure Campus with CCTV, fire safety, and sanitation",
                },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">
                    <span>{icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Start Virtual Tour
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20school%20library%20with%20digital%20resources%2C%20students%20studying%2C%20bookshelves%2C%20reading%20areas%2C%20educational%20technology%20with%20blue%20and%20green%20design%20elements&width=400&height=250&seq=15&orientation=landscape"
                alt="Library"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Library & Resource Center
              </h3>
              <p className="text-gray-600">
                A vibrant knowledge hub with 5,000+ books, e-learning platforms,
                and quiet zones for immersive study.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://acoustima.com/wp-content/uploads/2019/04/Multi-purpose-hall-seatupturkey2.png"
                alt="Auditorium"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Multipurpose Auditorium
              </h3>
              <p className="text-gray-600">
                A fully equipped space for seminars, events, performances, and
                community gatherings.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="https://news.beta80group.it/hubfs/Imported_Blog_Media/safety%20and%20security%20difference-4.jpg"
                alt="Secure Campus"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Security & Safety
              </h3>
              <p className="text-gray-600">
                Our campus ensures complete safety with CCTV monitoring, fire
                safety systems, and hygiene protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
