"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { MdCall } from "react-icons/md";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    let timeout: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null!;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  const toggleServiceDropdown = () => setServiceDropdown(!serviceDropdown);

  return (
    <nav
      className={`fixed w-full transition-transform duration-300 z-50 ${visible ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-lg border-b border-gray-200/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <a href="/">
              <img
                src="/SDS_Logo.png"
                alt="Sabo Detailing Studio Logo"
                className="h-6 md:h-4 lg:h-7 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white">
            <a
              href="/"
              className="relative text-white font-medium text-lg tracking-wide transition-all duration-300 
    hover:text-red-500 hover:scale-105 
    before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-red-500 
    before:transition-all before:duration-500 before:ease-in-out hover:before:w-full"
            >
              HOME
            </a>

            <a href="/About" className="relative text-white font-semibold transition-colors duration-300 hover:text-red-600 
    after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-red-600 
    after:transition-all after:duration-300 hover:after:w-full">
              ABOUT
            </a>
            <div className="relative">
              <button
                onClick={toggleServiceDropdown}
                className="relative text-white font-semibold transition-colors duration-300 hover:text-red-600 
    after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-red-600 
    after:transition-all after:duration-300 hover:after:w-full gap-1 flex"
              >
                SERVICE <ChevronDown size={16} />
              </button>
              {serviceDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-lg">
                  <a href="/Car-Wrapping" className="block px-4 py-2 hover:bg-red-600">
                    Wrapping
                  </a>
                  <a href="/paint-protection" className="block px-4 py-2 hover:bg-red-600">
                    PPF
                  </a>
                  <a href="/ceramic-coating" className="block px-4 py-2 hover:bg-red-600">
                    Ceramic Coating
                  </a>
                </div>
              )}
            </div>
            <a href="/Gallery" className="relative text-white font-semibold transition-colors duration-300 hover:text-red-600 
    after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-red-600 
    after:transition-all after:duration-300 hover:after:w-full">
              GALLERY
            </a>
            <a href="/contact" className="relative text-white font-semibold transition-colors duration-300 hover:text-red-600 
    after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-red-600 
    after:transition-all after:duration-300 hover:after:w-full">
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <X className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4  backdrop-blur-lg px-4 py-2 rounded-full shadow-lg  ">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 opacity-75 rounded-full blur-md animate-ping"></div>
              <p className="bg-red-600 text-white rounded-full p-3 shadow-md transition-transform duration-300 hover:scale-110">
                <MdCall className="h-6 w-6" />
              </p>
            </div>
            <span className="text-white font-semibold text-lg tracking-wide transition-colors duration-300 hover:text-red-500">
              9848866181
            </span>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 space-y-2">
            <a href="/" className="block hover:text-red-600">
              HOME
            </a>
            <a href="/About" className="block hover:text-red-600">
              ABOUT
            </a>
            <button
              onClick={toggleServiceDropdown}
              className="flex items-center gap-1 w-full text-left hover:text-red-600"
            >
              SERVICE <ChevronDown size={16} />
            </button>
            {serviceDropdown && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/Car-Wrapping" className="block hover:text-red-600">
                  Wrapping
                </a>
                <a href="/paint-protection" className="block hover:text-red-600">
                  PPF
                </a>
                <a href="/ceramic-coating" className="block hover:text-red-600">
                  Ceramic Coating
                </a>
              </div>
            )}
            <a href="/contact" className="block hover:text-red-600">
              CONTACT
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
