"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  vehicleType: string;
  date: Date | null;
  time: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    date: null,
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    let newErrors: Errors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!/^[\w.%+-]+@gmail\.com$/.test(formData.email))
      newErrors.email = "Please enter a valid @gmail.com email.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.time) newErrors.time = "Please select a time.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Appointment submitted successfully!");
      console.log(formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        vehicleType: "",
        date: null,
        time: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-900 p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Request for an Appointment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-medium">Vehicle Type *</label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Sedan, SUV, etc."
              />
              {errors.vehicleType && (
                <p className="text-red-500 text-sm">{errors.vehicleType}</p>
              )}
            </div>

            {/* Select Date */}
            <div>
              <label className="block text-sm font-medium">Select Date *</label>
              <DatePicker
                selected={formData.date}
                onChange={(date: Date | null) => setFormData({ ...formData, date })}
                dateFormat="dd/MM/yyyy"
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                placeholderText="Select Date"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>

            {/* Select Time */}
            <div>
              <label className="block text-sm font-medium">Select Time *</label>
              <TimePicker
                onChange={(time: string | null) =>
                  setFormData({ ...formData, time: time ?? "" })
                }
                value={formData.time}
                className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                clockIcon={false}
                format="HH:mm"
                disableClock={true}
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium">Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
          <button
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            > 
              APPOINTMENT NOW 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
