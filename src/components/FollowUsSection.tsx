import React from "react";
import { Instagram, Youtube } from "lucide-react";

const FollowUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">📢 Follow Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          Stay connected with Aabha Vidya Niketan for latest updates and
          insights!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/aabha_vidya_niketan_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-600 px-6 py-4 rounded-xl shadow-md transition"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-lg font-semibold">@aabha_vidya_niketan_</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AABHAVIDYANIKETANHRSECSCHOOL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 px-6 py-4 rounded-xl shadow-md transition"
          >
            <Youtube className="w-6 h-6" />
            <span className="text-lg font-semibold">
              @AABHAVIDYANIKETANHRSECSCHOOL
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
