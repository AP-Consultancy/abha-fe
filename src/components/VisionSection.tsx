import React from "react";
import {
  Brain,
  FlaskConical,
  Target,
  Shield,
  Globe,
  Quote,
} from "lucide-react";

const VisionSection: React.FC = () => {
  const visionPoints = [
    {
      icon: Brain,
      title: "Holistic Development",
      description: "To foster intellectual, emotional, and social development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: FlaskConical,
      title: "Innovative Learning",
      description: "To integrate technology and innovation in teaching methods",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Target,
      title: "Leadership & Service",
      description: "To encourage leadership, discipline, and community service",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Safe & Inclusive Environment",
      description:
        "To provide a safe, inclusive, and stimulating learning environment",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Citizenship with Indian Values",
      description:
        "To develop global citizens with a strong Indian cultural foundation",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section
      id="vision"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 py-20"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Target className="w-10 h-10 text-indigo-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Vision & Mission
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transforming education through innovation, values, and holistic
            development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Vision Statement */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-5" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  Shaping the Future of Education
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a beacon of holistic education that empowers every
                  learner to lead with knowledge, values, and a global outlook.
                </p>
              </div>
            </div>

            {/* Vision Points */}
            <div className="space-y-6">
              {visionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                  >
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 ${point.bgColor} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-7 h-7 ${point.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {point.description}
                      </p>

                      {/* Animated underline */}
                      <div
                        className={`w-0 h-0.5 bg-gradient-to-r ${point.color} mt-3 group-hover:w-full transition-all duration-500 rounded-full`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  Learn More About Our Approach
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=futuristic%20education%20concept%20with%20holographic%20displays%2C%20students%20engaged%20in%20innovative%20learning%2C%20high-tech%20classroom%20with%20digital%20interfaces%2C%20bright%20and%20inspiring%20educational%20environment%20with%20blue%20and%20green%20color%20scheme&width=600&height=600&seq=4&orientation=squarish"
                  alt="Our Vision"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium italic text-sm leading-relaxed mb-2">
                    "Education is not the filling of a pail, but the lighting of
                    a fire."
                  </p>
                  <p className="text-gray-500 text-xs font-medium">
                    - William Butler Yeats
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {visionPoints.slice(0, 3).map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 ${point.bgColor} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}
                  >
                    <IconComponent className={`w-5 h-5 ${point.iconColor}`} />
                  </div>
                );
              })}
            </div>
            <span className="text-gray-600 font-medium">
              Empowering Tomorrow's Leaders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
