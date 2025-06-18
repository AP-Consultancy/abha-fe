import React from "react";
import {
  BookOpen,
  Pencil,
  FlaskConical,
  Globe,
  Users,
  Cpu,
  Languages,
} from "lucide-react";

const AcademicCurriculum = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full w-14 h-14 shadow-md mb-4">
            <BookOpen className="w-7 h-7" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Academic Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow the Madhya Pradesh Board of Secondary Education (MPBSE)
            curriculum, aligned with the National Education Policy (NEP), to
            deliver competency-based, skill-enriched education.
          </p>
        </div>

        {/* Classes Offered */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Pencil className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Pre-Primary (Nursery to KG2)
                </h4>
                <p className="text-gray-600">
                  Activity-based learning that sparks curiosity and creativity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Primary (Class 1 to 5)
                </h4>
                <p className="text-gray-600">
                  Building a strong foundation through interactive teaching
                  methods.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Cpu className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Middle School (Class 6 to 8)
                </h4>
                <p className="text-gray-600">
                  Developing concept clarity through experiments and projects.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Secondary (Class 9 & 10)
                </h4>
                <p className="text-gray-600">
                  Focused academic preparation for board excellence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Senior Secondary (Class 11 & 12)
                </h4>
                <p className="text-gray-600">
                  Streams Offered:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Science (PCM / PCB)</li>
                    <li>Commerce</li>
                    <li>Humanities</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Labs & Facilities */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-100 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FlaskConical className="text-indigo-600" /> Labs & Facilities
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <FlaskConical className="text-green-600 w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Fully equipped Science Labs: Physics, Chemistry & Biology
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  High-speed Computer Lab with latest systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-yellow-500 w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Math Lab for hands-on concept visualization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Languages className="text-purple-600 w-5 h-5 mt-1" />
                <span className="text-gray-700">
                  Language Lab for sharpening communication skills
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-medium transition-all duration-300">
            Explore Our Learning Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicCurriculum;
