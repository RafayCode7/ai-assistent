"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FullScreenScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Determine the current section based on scroll position
      const newSection = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        1 // Prevents scrolling beyond the last section
      );
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[200vh] overflow-hidden">
      {/* Static Background */}
      <div className="fixed top-0 left-0 w-full h-[200vh] bg-gradient-to-b from-purple-800 via-purple-900 to-black -z-10" />

      {/* Section 1 */}
      <div
        className={`absolute w-full h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 transition-transform duration-700 ease-in-out ${
          currentSection === 0
            ? "translate-y-0"
            : currentSection === 1
            ? "-translate-y-[100vh]"
            : ""
        }`}
      >
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-snug">
            Move Faster with Your Tools in One Place
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Carepatron is a true all-in-one experience designed for care
            providers. Automate tasks with AI, simplify workflows, and access every tool you need.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center">
          <Image
            src="/img/3.png"
            alt="Tools Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-lg md:w-[400px] md:h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={`absolute w-full h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 transition-transform duration-700 ease-in-out ${
          currentSection === 1
            ? "translate-y-0"
            : currentSection === 0
            ? "translate-y-[100vh]"
            : ""
        }`}
      >
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-snug">
            Seamlessly Integrate AI
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Transform your practice with AI-powered tools that save time and
            enhance client interactions.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center">
          <Image
            src="/img/1.png"
            alt="AI Integration Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-lg md:w-[400px] md:h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="absolute bottom-0 w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
            End of the Journey 🎉
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 leading-relaxed">
            You’ve reached the last section! Stay focused and keep going.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenScroll;
