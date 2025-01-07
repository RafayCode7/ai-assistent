export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-8 py-4 bg-[#FDF1E0] shadow-md"
    >
      {/* Logo Section */}
      <div className="text-2xl font-extrabold text-[#212945] hover:opacity-90 transition-opacity">
        LOGO
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg">
        <a
          href="#features"
          className="text-[#212945] hover:text-[#F95700] transition-colors"
        >
          Features
        </a>
        <a
          href="#about"
          className="text-[#212945] hover:text-[#F95700] transition-colors"
        >
          About Us
        </a>
        <a
          href="#pricing"
          className="text-[#212945] hover:text-[#F95700] transition-colors"
        >
          Pricing
        </a>
      </nav>

      {/* Buttons */}
      <div className="space-x-4 flex items-center">
        <button className="border border-[#F95700] text-[#F95700] px-4 py-2 rounded-md hover:bg-[#F95700] hover:text-white transition">
          Login
        </button>
        <button className="bg-[#F95700] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
          Get Started Now
        </button>
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden">
        <button
          className="text-[#212945] focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
