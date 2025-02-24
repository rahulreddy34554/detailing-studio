"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', model: '', outlet: '' });

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

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const toggleServiceDropdown = () => setServiceDropdown(!serviceDropdown);
  const closePopup = () => setShowPopup(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    closePopup();
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-xl shadow-lg max-w-lg w-full overflow-hidden">
            <div className="relative h-56">
              <img
                src="https://i.pinimg.com/474x/2f/c6/ed/2fc6ed465c753d8641884605ec5ad9a4.jpg"
                alt="Popup Banner"
                className="w-full h-full object-cover"
              />
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 ">
              <h2 className="text-xl font-semibold text-center">Book Your Appointment</h2>

              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-500 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Model</label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-500 text-black"
                  required
                >
                  <option value="">Select Model</option>
                  <option value="Dzire">Dzire</option>
                  <option value="Swift">Swift</option>
                  <option value="Baleno">Baleno</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Outlet</label>
                <select
                  name="outlet"
                  value={formData.outlet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-500 text-black"
                  required
                >
                  <option value="">Select Outlet</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="disclaimer" required />
                <label htmlFor="disclaimer" className="text-sm italic">
                  Disclaimer: I authorize SDS to send notifications via SMS/Email.
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      <nav
        className={`fixed w-full transition-transform duration-300 z-50
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          backdrop-blur-lg border-b border-gray-200/30`}
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

            <div className="hidden md:flex space-x-8 text-white">
              <a href="/" className="hover:text-red-600">HOME</a>
              <a href="/About" className="hover:text-red-600">ABOUT</a>
              <div className="relative">
                <button
                  onClick={toggleServiceDropdown}
                  className="flex items-center gap-1 hover:text-red-600"
                >
                  SERVICE <ChevronDown size={16} />
                </button>
                {serviceDropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-lg">
                    <a href="/Car-Wrapping" className="block px-4 py-2 hover:bg-red-600">Wrapping</a>
                    <a href="/paint-protection" className="block px-4 py-2 hover:bg-red-600">PPF</a>
                    <a href="/ceramic-coating" className="block px-4 py-2 hover:bg-red-600">Ceramic Coating</a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-red-600">BLOG</a>
              <a href="/Gallery" className="hover:text-red-600">GALLERY</a>
              <a href="/contact" className="hover:text-red-600">CONTACT</a>
            </div>

            <div className="md:hidden">
              {menuOpen ? (
                <X className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
              )}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <span>9848866181</span>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-black text-white p-4 space-y-2">
              <a href="/" className="block hover:text-red-600">HOME</a>
              <a href="/About" className="block hover:text-red-600">ABOUT</a>
              <div>
                <button
                  onClick={toggleServiceDropdown}
                  className="flex items-center gap-1 w-full text-left hover:text-red-600"
                >
                  SERVICE <ChevronDown size={16} />
                </button>
                {serviceDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="/Car-Wrapping" className="block hover:text-red-600">Wrapping</a>
                    <a href="/paint-protection" className="block hover:text-red-600">PPF</a>
                    <a href="/ceramic-coating" className="block hover:text-red-600">Ceramic Coating</a>
                  </div>
                )}
              </div>
              <a href="#" className="block hover:text-red-600">BLOG</a>
              <a href="/contact" className="block hover:text-red-600">CONTACT</a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}