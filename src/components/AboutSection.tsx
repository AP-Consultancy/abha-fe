import React, { useRef, useEffect, useState } from "react";
import {
  School,
  Users,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import * as echarts from "echarts";

const AboutSection: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsChartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Excellence",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Alumni Worldwide",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: School,
      number: "150+",
      label: "Expert Faculty",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      number: "98%",
      label: "Graduation Rate",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (statsChartRef.current && isVisible) {
      const statsChart = echarts.init(statsChartRef.current);
      const statsOption = {
        animation: true,
        animationDuration: 2000,
        radar: {
          indicator: [
            { name: "Academic Excellence", max: 100 },
            { name: "Sports", max: 100 },
            { name: "Arts & Culture", max: 100 },
            { name: "Innovation", max: 100 },
            { name: "Community Service", max: 100 },
          ],
          shape: "polygon",
          splitNumber: 4,
          axisName: {
            color: "#64748b",
            fontSize: 12,
            fontWeight: 500,
          },
          splitLine: {
            lineStyle: {
              color: "#e2e8f0",
              width: 1,
            },
          },
          splitArea: {
            areaStyle: {
              color: ["rgba(99, 102, 241, 0.05)", "rgba(99, 102, 241, 0.1)"],
            },
          },
          axisLine: {
            lineStyle: {
              color: "#cbd5e1",
            },
          },
        },
        series: [
          {
            name: "School Performance",
            type: "radar",
            symbol: "circle",
            symbolSize: 6,
            data: [
              {
                value: [95, 88, 92, 85, 90],
                name: "Performance Metrics",
                areaStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "rgba(99, 102, 241, 0.8)" },
                      { offset: 1, color: "rgba(168, 85, 247, 0.6)" },
                    ],
                  },
                },
                lineStyle: {
                  color: "#6366f1",
                  width: 3,
                },
                itemStyle: {
                  color: "#6366f1",
                  borderColor: "#ffffff",
                  borderWidth: 2,
                },
              },
            ],
          },
        ],
      };
      statsChart.setOption(statsOption);

      const handleResize = () => statsChart.resize();
      window.addEventListener("resize", handleResize);

      return () => {
        statsChart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isVisible]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-indigo-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Aabha Vidya Niketan
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 1995, we have been at the forefront of educational
            innovation for over 25 years.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-full border border-indigo-100">
            <Star className="w-5 h-5 text-indigo-600" />
            <p className="italic text-indigo-800 font-medium">
              "Empowering Minds, Enlightening Futures"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20school%20campus%20with%20diverse%20students%20and%20teachers%20interacting%20in%20a%20high-tech%20learning%20environment%2C%20innovative%20classroom%20setting%2C%20digital%20displays%2C%20collaborative%20spaces%2C%20bright%20and%20airy%20interior%20with%20natural%20light&width=600&height=400&seq=3&orientation=landscape"
                    alt="School Campus"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-white" />
                        <p className="text-white text-lg font-medium">
                          Our state-of-the-art campus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${stat.iconColor}`}
                        />
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.number}
                      </div>
                      <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                        {stat.label}
                      </p>
                      <div
                        className={`w-0 h-1 bg-gradient-to-r ${stat.color} mt-3 group-hover:w-full transition-all duration-500 rounded-full`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Story Section */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-5"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-10"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                  Our Story
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Aabha Vidya Niketan Hr. Sec. School is not just an educational
                  institution — it's a space where young minds are nurtured,
                  values are instilled, and dreams are shaped. With a legacy of
                  academic excellence and moral integrity, we are committed to
                  delivering a learning experience that builds confident,
                  creative, and responsible citizens of tomorrow.
                </p>
              </div>
            </div>

            {/* Performance Metrics Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-indigo-600" />
                Performance Metrics
              </h4>
              <div ref={statsChartRef} className="w-full h-80"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Meet Our Team
                </span>
              </button>
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg border border-gray-200 hover:border-indigo-200">
                <span className="flex items-center gap-2 group-hover:text-indigo-600 transition-colors duration-300">
                  <Calendar className="w-5 h-5" />
                  Our History
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {stats.slice(0, 3).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}
                  >
                    <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                );
              })}
            </div>
            <span className="text-gray-600 font-medium">
              Building Excellence Since 1995
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
