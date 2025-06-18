import { Diamond, Target, Clock, Heart, Lightbulb } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Diamond,
      title: "Integrity",
      description: "We uphold honesty and strong moral principles.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic and personal excellence.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Discipline",
      description: "We believe in self-control, punctuality, and order.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We respect others and value emotional intelligence.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking approaches.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Diamond className="w-8 h-8 text-indigo-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Core Values
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            The fundamental principles that guide our journey towards excellence
            and shape our character
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Floating orb decoration */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${value.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon container */}
                  <div
                    className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Animated underline */}
                  <div
                    className={`w-0 h-1 bg-gradient-to-r ${value.color} mt-4 group-hover:w-full transition-all duration-500 rounded-full`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 ${value.bgColor} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}
                  >
                    <IconComponent className={`w-5 h-5 ${value.iconColor}`} />
                  </div>
                );
              })}
            </div>
            <span className="text-gray-600 font-medium">
              Building Character Through Values
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
