"use client";

import { useState } from "react";
import Image from "next/image";
import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const { email, number } = formData;

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(number)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    // Validate email (@gmail.com)
    if (!/^[\w.-]+@gmail\.com$/.test(email)) {
      setErrorMessage("Email must be a valid @gmail.com address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Submitted:", formData);
    setSuccessMessage("Form submitted successfully!");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-6xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-400">
          <a href="/" className="hover:underline">Home</a> / Contact
        </p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-12">
        {/* Contact Form Section */}
        <div className="bg-zinc-800 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

          {/* Success and Error Messages */}
          {successMessage && (
            <div className="mb-4 p-3 text-green-500 bg-green-100 rounded-lg">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-3 text-red-500 bg-red-100 rounded-lg">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
              required
            />
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="10-digit Phone Number"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
              required
              maxLength={10}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-white bg-zinc-700 focus:ring"
              required
            >
              <option value="">Select Service</option>
              <option value="PPF">PPF</option>
              <option value="Ceramic-Coating">Ceramic Coating</option>
              <option value="Wrapping">Wrapping</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Here..."
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <p className="text-lg text-gray-400 mb-8">
            Have questions? Reach out to us, and we'll be happy to assist!
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span><MdCall className="h-5 w-5 text-blue-800" /></span>
              <p>Phone Number: 9848866181</p>
            </div>
            <div className="flex items-center space-x-4">
              <span><SiGmail className="h-5 w-5 text-red-600" /></span>
              <p>Email Address: saboodetailingstudio@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span><IoLogoWhatsapp className="text-green-500 h-5 w-5" /></span>
              <p>WhatsApp: 9848866181</p>
            </div>
            <div className="flex items-center space-x-4">
              <span><ImLocation2  className="h-5 w-5 text-red-500"/></span>
              <p>Our Office: Saboo Detailing Studio</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.17404136475!2d-74.11808655804892!3d40.70531173215702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd7d5a1bbd%3A0x4fddc19e51f4ed5b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679938744257!5m2!1sen!2sus"
                width="100%"
                height="300"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_3_v3.jpg"
          alt="We Are Always Ready"
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">We Are Always Ready To Take A Perfect Shot</h2>
        </div>
      </div>
    </div>
  );
}
