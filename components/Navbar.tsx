'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
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

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={
        `fixed w-full transition-transform duration-300 z-50
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        backdrop-blur-lg border-b border-gray-200/30`
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <img 
              src="https://saboodetailingstudio.com/logo.png" 
              alt="Sabo Detailing Studio Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-600">HOME</a>
            <a href="#" className="hover:text-red-600">ABOUT</a>
            <a href="#" className="hover:text-red-600">SERVICE</a>
            <a href="#" className="hover:text-red-600">BLOG</a>
            <a href="#" className="hover:text-red-600">PAGES</a>
            <a href="#" className="hover:text-red-600">CONTACT</a>
          </div>

          <div className="md:hidden">
            {menuOpen ? (
              <X
                className="h-6 w-6 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                className="h-6 w-6 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <span className="hidden md:inline-block">9848898488</span>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 space-y-2">
            <a href="#" className="block hover:text-red-600">HOME</a>
            <a href="#" className="block hover:text-red-600">ABOUT</a>
            <a href="#" className="block hover:text-red-600">SERVICE</a>
            <a href="#" className="block hover:text-red-600">BLOG</a>
            <a href="#" className="block hover:text-red-600">PAGES</a>
            <a href="#" className="block hover:text-red-600">CONTACT</a>
          </div>
        )}
      </div>
    </nav>
  );
}
