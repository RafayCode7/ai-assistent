// components/Footer.js
import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-8">
      {/* Subscription Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg mb-6 text-gray-400">
          Subscribe to receive the latest updates, news, and insights from VocalFlow.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 text-black rounded-l-md w-72 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-4 rounded-r-md hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-wrap justify-between mb-12">
        {/* About Us */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0 px-4">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a leading agency specializing in AI solutions, transforming the way businesses interact with technology.
          </p>
        </div>

        {/* Get in Touch */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0 px-4">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-sm leading-relaxed">
            <li>Email: <a href="mailto:support@yourserviceapp.in" className="hover:text-orange-500">support@yourserviceapp.in</a></li>
            <li>Phone: <a href="tel:+919407017395" className="hover:text-orange-500">+91 9407017395</a></li>
            <li>Address: 123 Service St, City, Country</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="w-full sm:w-1/3 px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
            <li>AI Voice Assistant</li>
            <li>AI Integration Solutions</li>
            <li>Customer Support Automation</li>
            <li>Voice-based Application Development</li>
            <li>Custom AI Training</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Virtual Assistant Customization</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VocalFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
