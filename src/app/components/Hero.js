import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-16 bg-[#FDF1E0] h-auto md:h-[calc(100vh-100px)] py-10 md:py-0"
    >
      {/* Left Section - Text */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#212945]">
          Revolutionize Your Business with <br />
          <span className="text-[#F95700]">AI-Powered Voice Assistants</span>.
        </h1>
        <p className="text-base md:text-lg text-gray-800 mt-6">
          Empower your business with AI solutions to handle calls, follow-ups, and appointments. Save time, increase productivity, and focus on what matters most while AI takes care of the rest.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
          <button className="px-6 py-3 text-white bg-[#F95700] rounded-lg text-sm md:text-lg font-semibold shadow-xl hover:bg-[#e64f00] transition-all duration-200">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-lg text-sm md:text-lg font-semibold shadow-md hover:bg-gray-200 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="mt-8 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
        <img
          src="/img/cta-image.webp" // Replace with your image path
          alt="Workspace with AI Assistant"
          className="h-56 w-56 md:h-[500px] md:w-[500px] object-cover"
        />
      </div>
    </section>
  );
}
