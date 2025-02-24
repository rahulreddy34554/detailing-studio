"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setError("Only @gmail.com addresses are allowed.");
      return;
    }
    setError("");
    console.log("Form submitted successfully with email:", email);
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-6 " >
          <h2 className="text-2xl font-bold">
            SIGN UP FOR OUR NEWSLETTER TO GET WEEKLY UPDATES
          </h2>
          <p className="text-gray-400">ON EXCLUSIVE OFFERS AND DISCOUNTS!</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4 mb-10 "
        >
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full max-w-md rounded-lg text-black"
            required
            disabled={isSubmitted}
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            disabled={isSubmitted}
          >
            ➤
          </button>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div>
            <h3 className="text-xl font-bold mb-4">
            <img 
              src="https://saboodetailingstudio.com/logo.png" 
              alt="Sabo Detailing Studio Logo"
              className="h-20 w-auto object-contain"
            />
            </h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-red-600 p-2 rounded-full mr-2">📞</div>
              <p className="text-xl font-bold"> 9848898488</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">QUICK LINK</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Team</li>
            <a href="/contact"><li>Contact Us</li></a> 
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">QUICK LINK</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Appointment</li>
              <li>Blog / News</li>
              <li>FAQ</li>
              <li>Team</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">LOCATION & CONTACT</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Saboo-towers</li>
              <li>✉️ saboodetailingstudio@gmail.com</li>
              <li>📅 Sun -: Open 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-red-700 pt-4 flex justify-between items-center">
          <p>Copyright 2025, All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500">🔝</a>
            <a href="#" className="hover:text-red-500">📷</a>
            <a href="#" className="hover:text-red-500">📘</a>
            <a href="#" className="hover:text-red-500">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
