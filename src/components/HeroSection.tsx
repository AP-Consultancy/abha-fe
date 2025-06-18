import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";

const heroImages = [hero1, hero2, hero3, hero4, hero5];
const schoolName = "Aabha Vidya Niketan Hr. Sec. School";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen overflow-hidden flex items-center justify-center bg-black transition-all duration-1000 ${
        isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeCarousel"
            style={{
              animationDelay: `${index * 5}s`,
              animationDuration: `${heroImages.length * 5}s`,
            }}
          />
        ))}

        {/* Overall dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Left-side black gradient shadow */}
        <div className="absolute left-0 bottom-0 h-full w-full pointer-events-none z-10 bg-[linear-gradient(66deg,rgba(0,0,0,0.9)_0%,transparent_60%)]" />
      </div>

      {/* Foreground Text - Bottom Left */}
      <div className="absolute bottom-20 left-10 z-10 p-4 md:p-6 rounded-xl max-w-xl">
        <h1 className="text-2xl lg:text-3xl font-semibold text-white mb-1">
          Welcome to
        </h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-white flex flex-wrap">
          {schoolName.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fadeLetter"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationFillMode: "forwards",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
