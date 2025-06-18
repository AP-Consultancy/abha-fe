import React from "react";

const LeadershipMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Principal's Desk */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:items-start gap-6">
          <div className="text-4xl md:text-5xl text-blue-600 mb-4 md:mb-0">
            👨🏫
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              From the Principal’s Desk
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              “At Aabha Vidya Niketan Hr. Sec. School, education is not just
              about textbooks. It is about creating lifelong learners and
              leaders. Our school fosters curiosity, creativity, and character
              in every child. We take pride in our qualified faculty, modern
              facilities, and a community that believes in meaningful
              education.”
            </p>
            <p className="text-blue-700 font-semibold italic">
              – Anita Chauhan, Principal
            </p>
          </div>
        </div>

        {/* Director's Desk */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:items-start gap-6">
          <div className="text-4xl md:text-5xl text-green-600 mb-4 md:mb-0">
            👨🏫
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              From the Director’s Desk
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              “At Aabha Vidya Niketan Hr. Sec. School, our vision extends beyond
              academic achievements. We believe in cultivating a mindset of
              innovation, resilience, and community responsibility. As the
              Director, I am proud to see our students thrive in a nurturing
              environment that values tradition while embracing the future. Let
              us continue building a foundation where learning is joyful, values
              are honored, and each child’s potential is unlocked.”
            </p>
            <p className="text-green-700 font-semibold italic">
              – Ajay Singh Chauhan, Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;
