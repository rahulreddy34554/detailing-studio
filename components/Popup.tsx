"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const pathname = usePathname();

  // Show popup only on the homepage and only once until localStorage is cleared
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    // Show popup only if user is on home page and hasn't seen it yet
    if (pathname === "/" && !hasSeenPopup) {
      setShowPopup(true);
    }
  }, [pathname]);

  // Lock scroll when popup is active
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);

  const closePopup = () => {
    // Set flag in localStorage to prevent future popups
    localStorage.setItem("hasSeenPopup", "true");
    setShowPopup(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closePopup();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black rounded-xl shadow-lg max-w-lg w-full overflow-hidden">
        {/* Image Banner */}
        <div className="relative h-56">
          <img
            src="https://i.pinimg.com/474x/2f/c6/ed/2fc6ed465c753d8641884605ec5ad9a4.jpg"
            alt="Popup Banner"
            className="w-full h-full object-cover"
          />
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-white border rounded-full p-1 bg-red-700 hover:text-red-950"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
            <label className="block text-sm font-medium">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-500 text-black"
              required
            >
              <option value="">Select Service</option>
              <option value="PPF">PPF</option>
              <option value="Ceramic-Coating">Ceramic Coating</option>
              <option value="Wrapping">Wrapping</option>
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
  );
}
