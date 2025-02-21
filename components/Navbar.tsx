// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Add throttle for better performance
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
    <nav className={`
      fixed w-full transition-transform duration-300 z-50
      ${visible ? 'translate-y-0' : '-translate-y-full'}
      backdrop-blur-lg  border-b border-gray-200/30
    `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">Cras</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-600">HOME</a>
            <a href="#" className="hover:text-red-600">ABOUT</a>
            <a href="#" className="hover:text-red-600">SERVICE</a>
            <a href="#" className="hover:text-red-600">BLOG</a>
            <a href="#" className="hover:text-red-600">PAGES</a>
            <a href="#" className="hover:text-red-600">CONTACT</a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block">1-800-915-6271</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
