"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  model: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  model?: string;
}

export default function CarInterestForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    email: "",
    model: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Valid 10-digit mobile number is required";
    if (!form.email.trim() || !/^\S+@gmail\.com$/.test(form.email))
      newErrors.email = "Email must be a valid @gmail.com address";
    if (!form.model) newErrors.model = "Please select a car model";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", form);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 lg:px-16 py-3 bg-white/30 backdrop-blur-lg shadow-md">
        <img
          src="https://bharathyundai.com/wp-content/uploads/2024/06/wss-1.png"
          className="h-12"
          alt="Hyundai Logo"
        />
        <p className="text-gray-900 text-lg font-semibold">📞 7733888999</p>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="https://cretaelectric.hyundai.co.in/assets/kv-first-D4P_nOd0.jpg"
          alt="Banner"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Form Section - Positioned Below Banner on Small Screens */}
      <div className="w-full flex justify-center mt-6 md:mt-16  lg:absolute lg:top-1/3 lg:left-72 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:p-6 lg:rounded-2xl lg:shadow-lg lg:w-[90%] lg:max-w-lg">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center pb-4">
            REGISTER YOUR INTEREST
          </h3>

          {submitted ? (
            <div className="text-center text-green-600 text-lg font-semibold">
              ✅ Form Submitted Successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent text-black text-center text-sm sm:text-base focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

              {/* Mobile */}
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent text-black text-center text-sm sm:text-base focus:outline-none"
              />
              {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent text-black text-center text-sm sm:text-base focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              {/* Model Selection */}
              <select
                name="model"
                value={form.model}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-black bg-transparent text-black text-center text-sm sm:text-base focus:outline-none"
              >
                <option value="">Select Model</option>
                <option value="Model A">Model A</option>
                <option value="Model B">Model B</option>
                <option value="Model C">Model C</option>
              </select>
              {errors.model && <p className="text-red-500 text-xs">{errors.model}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          )}
          <p className="text-xs text-gray-600 mt-3 text-center">
            *By clicking 'Submit', you agree to our Terms & Conditions.
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <OffersCarousel />
      <CarShowcase />
      <FeaturesSection />
      <Footer />
    </>
  );
}







import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper as SwiperCore } from "swiper/types"; // Import Swiper type

const carOffers = [
    { name: "Hyundai Creta", price: "₹10.99-20.14 Lakhs*", image: "https://bharathyundai.com/wp-content/uploads/2024/05/image-removebg-preview-20.png" },
    { name: "Hyundai Verna", price: "₹11-17.41 Lakhs*", image: "https://bharathyundai.com/wp-content/uploads/2024/05/1679903528.png" },
    { name: "Hyundai Venue", price: "₹7.94 - 13.48 Lakhs*", image: "https://bharathyundai.com/wp-content/uploads/2024/05/1662110515.png" },
    { name: "Hyundai I20", price: "₹7.04-11.20 Lakhs*", image: "https://bharathyundai.com/wp-content/uploads/2024/05/1656409788.png" },
    { name: "Hyundai I20 N Line", price: "₹9.99-12.51 lakhs*", image: "https://bharathyundai.com/wp-content/uploads/2024/05/1665133996.png" },
];

export function OffersCarousel() {
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <div className="bg-[#392e2e] text-white py-8">
            <h2 className="text-center text-3xl font-bold mb-6">Our Exclusive Offers</h2>
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Previous Button */}
                <button
                    className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700"
                >
                    ❮
                </button>

                <Swiper
                   // ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="w-full"
                >
                    {carOffers.map((car, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl shadow-xl p-5 relative hover:scale-105 transition-transform">
                                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                                    OFFER
                                </div>
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    width={350}
                                    height={250}
                                    className="w-full rounded-lg"
                                />
                                <h3 className="text-black text-xl font-semibold mt-4">{car.name}</h3>
                                <p className="text-red-600 text-lg font-bold">{car.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button */}
                <button
                    className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700"
                >
                    ❯
                </button>
            </div>
            <p className="text-end text-sm text-gray-400 mt-3">*TnC apply</p>
        </div>
    );
}










const colors = [
    { name: "White", code: "#FFFFFF", img: "https://imgd.aeplcdn.com/600x337/n/g8ajt9b_1804861.jpg?q=80" },
    { name: "Black", code: "#000000", img: "https://imgd.aeplcdn.com/600x337/n/xacjt9b_1804863.jpg?q=80" },
    { name: "Gray", code: "#808080", img: "https://imgd.aeplcdn.com/600x337/n/xfq8t9b_1804851.jpg?q=80" },
    { name: "Blue", code: "#0033CC", img: "https://imgd.aeplcdn.com/600x337/n/08u8t9b_1804857.jpg?q=80" },
    { name: "Red", code: "#CC0000", img: "https://imgd.aeplcdn.com/600x337/n/28v8t9b_1804859.jpg?q=80" },
];

export function CarShowcase() {
    const [selectedCar, setSelectedCar] = useState(colors[0]);

    return (
        <section className="bg-white px-6 sm:px-10 py-12 relative max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Hyundai CRETA Electric</h2>
                    <p className="text-lg font-medium text-gray-700 mt-2">
                        Undisputed. Ultimate. Now electric.
                    </p>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto lg:mx-0">
                        The iconic SUV, in its electric avatar, is here to take your driving experience to the next level. Building on the undisputed ultimate machine, the car seamlessly merges design, performance, technology, and style.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                            Brochure
                        </button>
                        <a href="#" className="text-blue-500 flex items-center text-lg">
                            Register your Interest <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>

                {/* Car Image Section */}
                <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                    {/* Background Color Block - Ensuring it only appears behind the car */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[420px] rounded-lg -z-10"
                        style={{ backgroundColor: selectedCar.code }}
                    ></div>

                    {/* Car Image */}
                    <img
                        src={selectedCar.img}
                        alt={`CRETA Electric - ${selectedCar.name}`}
                        className="w-[85%] sm:w-[65%] lg:w-[90%] max-w-xs sm:max-w-md lg:max-w-lg relative z-10"
                    />
                </div>
            </div>

            {/* Color Selection Dots */}
            <div className="mt-6 flex justify-center lg:justify-end lg:pl-4 space-x-3">
                {colors.map((car) => (
                    <button
                        key={car.name}
                        className={`w-6 h-6 rounded-full border-2 transition-transform duration-200 focus:ring focus:ring-gray-300 ${
                            selectedCar.name === car.name ? "border-black scale-110 ring-2 ring-black" : "border-gray-400"
                        }`}
                        style={{ backgroundColor: car.code }}
                        onClick={() => setSelectedCar(car)}
                        aria-label={`Select ${car.name} color`}
                    ></button>
                ))}
            </div>
        </section>
    );
}






import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Home } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Address */}
                <div>
                    <h2 className="text-xl font-bold">Bharat Hyundai</h2>
                    <p className="mt-2 flex items-start gap-2">
                        <Home className="w-5 h-5 mt-1" />
                        #3,4,5,6 survey no 58/1, Gowliddodi, gopanpally, Financial district,Gachibowli-500075
                    </p>
                </div>

                {/* Cars List */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Cars</h3>
                    <ul className="space-y-2">
                        <li className="border-b pb-1">Hyundai Creta</li>
                        <li className="border-b pb-1">Hyundai Creta EV</li>
                        <li className="border-b pb-1">Hyundai I20</li>
                        <li className="border-b pb-1">Hyundai Verna</li>
                        <li className="border-b pb-1">Hyundai Venue</li>
                    </ul>
                </div>

                {/* About Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">About Us</h3>
                    <ul className="space-y-2">
                        <li className="border-b pb-1">About Bharat Hyundai Motors</li>
                        <li className="border-b pb-1">Gallery</li>
                        <li className="border-b pb-1">Testimonials</li>
                        <li className="border-b pb-1">Contact Us</li>
                        <li className="border-b pb-1">Career</li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div className="space-y-8">
                    <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                    <div className="flex gap-4 mb-3">
                        <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                        <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                        <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                        <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                    </div>
                    <p className="flex items-center gap-2">
                        <Phone className="w-5 h-5" href="https://bharathyundai.com" />  7733888999
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <Mail className="w-5 h-5" />
                        <a href="mailto:digitalvrm@gmail.com" className="hover:text-gray-400">
                            digitalvrm@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                <p>
                    <a href="#" className="hover:text-gray-400">Terms & Conditions</a> |
                    <a href="#" className="hover:text-gray-400"> Privacy Policy</a>
                </p>
                <p className="mt-2">© 2025 All Rights Reserved by Venkataramana Motors.</p>
                <p className="mt-1 text-gray-500">Powered by <a href="https://broaddcast.com/"><span  className="hover:text-red-500"> BroaddCast Business Solutions LLP.</span> </a></p>
            </div>
        </footer>
    );
}




import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        image: "https://s7ap1.scene7.com/is/image/tatamotors/adaptive-cruise-control-2?$TT-614-420-S$&amp;fit=crop&amp;fmt=webp-alpha",
        title: "Connected LED Tail lamps with Goodbye Animation",
        description:
            "CURVV is a fine blend of Sturdy SUV & Premium Design of a Cépé. A Coupé SUV Shaped for You.",
    },
    {
        image: "https://example.com/image1.jpg",
        title: "Connected LED Tail lamps with Goodbye Animation",
        description:
            "CURVV is a fine blend of Sturdy SUV & Premium Design of a Cépé. A Coupé SUV Shaped for You.",
    },
    {
        image: "https://example.com/image2.jpg",
        title: "ADAS Level 2",
        description:
            "Drive with complete peace of mind of unmatched safety and advanced driver assistance.",
    },
    {
        image: "https://example.com/image3.jpg",
        title: "ATLAS Architecture",
        description:
            "Experience the CURVV's luxury and resilience with the sophisticated, toughened ATLAS Architecture, blending elegance and strength seamlessly.",
    },
];

export function FeaturesSection() {
    return (
        <div className=" py-10 px-5 md:px-20">
            <h2 className="text-2xl font-bold font-serif text-center mb-6 text-black">Features</h2>
            <div className="relative max-w-6xl mx-auto">
                {/* Custom Navigation Buttons */}
                <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10  p-2 rounded-full shadow-md">
                    <ChevronLeft size={10} />
                </button>
                <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10  p-2 rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>

                {/* Swiper Component */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-black">{feature.title}</h3>
                                    <p className="text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}