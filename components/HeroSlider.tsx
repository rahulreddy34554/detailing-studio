"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { PiClockCountdownLight } from "react-icons/pi";
import { MdCarRepair } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";




export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png", // Place the image in the public folder
      title: "CAR REPAIR MAINTAINANCE",
      description:
        "Our skilled team of certified technician the proportion of a substance that is contained in a mixture or alloy etc.something (a person or object or scene) selected by an artist or photographer for graphic representation ",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/16/76/4a/16764a8834c52fbd598399fbdbb3440e.jpg", // Place the image in the public folder
      title: "CAR REPAIR MAINTAINANCE",
      description:
        "Our skilled team of certified technician the proportion of a substance that is contained in a mixture or alloy etc.something (a person or object or scene) selected by an artist or photographer for graphic representation",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/38/59/00/38590004cd267aadd0cdb5094583f504.jpg", // Place the image in the public folder
      title: "AUTOMOTIVE REPAIR MAINTENANCE",
      description:
        "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best.",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt="Automotive Repair"
                layout="fill"
                objectFit="cover"
                className="brightness-50 "
              />

              {/* Content Section on the Left */}
              {/* <div className="absolute inset-0 bg-black/40"></div> */}
              <div className="absolute top-1/2 left-16 -translate-y-1/2  text-center w-1/2 ">
                <div className="text-left text-white ">
                  <h1 className=" font-extrabold mb-6 leading-tight opacity-95 text-4xl sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-8 opacity-90 sm:w-[80%] sm:text-lg md:text-xl">{slide.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                    APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Services />
      <WhyChooseUs />
      
      {/* <AutomotivePerfection /> */}
      {/* <DetailingServices /> */}
      <SabooAdvantage />
      <DedicatedServices/>
      <StatsSection/>
     
      <TestimonialSlider />
      <BlogNewsSection/>
     
      {/* <TeamSection/> */}

    </>

  );
}






export function Services() {
  const services = [
    {
      id: "01",
      title: "PERFORMANCE CHECK",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
      icon: <PiClockCountdownLight className="text-white w-10 h-10" />,
    },
    {
      id: "02",
      title: "AUTO REPAIR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
      icon: <MdCarRepair className="text-white w-10 h-10" />,
    },
    {
      id: "03",
      title: "FLEET SERVICES",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
      icon: <RiCustomerService2Fill className="text-white w-10 h-10" />,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div key={service.id}
            initial={{ opacity: 0, y: 100 }} // Start from below
            whileInView={{ opacity: 1, y: 0 }} // Animate into view
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div
                className="text-3xl font-extrabold"
                style={{
                  WebkitTextStroke: "1.5px white",
                  color: "transparent",
                }}
              >
                {service.id}
              </div>
              <div className="flex-1 border-t border-white mx-4"></div>
            </div>
            <div className="bg-[#111] p-8 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
                  {typeof service.icon === "string" ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  ) : (
                    service.icon
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}








import React, { useState } from "react";



export function WhyChooseUs() {
  const features = [
    "CERTIFIED TECHNICIANS",
    "COMPREHENSIVE REPAIR SERVICES",
    "900 FIVE STAR REVIEWS",
    "WARRANTY ON REPAIRS",
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative bg-black text-white py-5 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 ">
        {/* Left Content */}
        <div className="mb-40  ">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl  font-black mb-4 text-white"
          >
            WHY CHOOSE US
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white mb-8 leading-relaxed "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's stan.
          </motion.p>

          {/* Features List */}
          <div className="space-y-10 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold text-white cursor-pointer transition-all duration-300 ease-in-out "
                style={{
                  WebkitTextStroke: "1px white ",
                  color: hoveredIndex === index ? "transparent" : "transparent",
                }}
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <a href="/About">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-600 hover:bg-white hover:text-black text-white py-4 px-10 font-black rounded-sm shadow-md mt-12 p-11"
            >
              VIEW MORE
            </motion.button>
          </a>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-end w-full">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden w-full max-w-[500px] flex justify-end"
          >
            {/* Red Background Frame */}
            <div className="absolute inset-0 bg-red-800 -z-10 rotate-[-5deg] translate-x-6 translate-y-6 w-full h-full rounded-lg"></div>

            {/* Mechanic Image */}
            <img
              src="https://cras-next-js.vercel.app/assets/img/choose-us.png"
              alt="Mechanic"
              className="w-full h-[700px] object-cover rounded-xl"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Circular Logo */}
          {/* <div className="absolute bottom-6 left-6">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center overflow-hidden border-4 border-white">
              <img
                src="https://cras-next-js.vercel.app/assets/img/Circle.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
}









import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Roberts Bush",
    location: "From Canada",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised.",
    image: "https://cras-next-js.vercel.app/assets/img/testimaonial.png"
  },
  {
    id: 2,
    name: "Emily Clark",
    location: "From USA",
    quote:
      "I was extremely satisfied with the service. The professionalism and attention to detail were top-notch. Highly recommend!",
    image: "https://cras-next-js.vercel.app/assets/img/testimaonial.png",
  },
];

export function TestimonialSlider() {
  return (
    <div className="bg-zinc-900 py-10 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-10">
          SEE WHAT OUR SATISFIED CUSTOMER SAYS
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute top-10 right-16 flex gap-4 z-10">
          <button className="custom-swiper-button-prev bg-zinc-800 p-2 border hover:bg-red-600  text-white">
            &larr; Prev
          </button>
          <button className="custom-swiper-button-next bg-zinc-800 p-2 border text-white hover:bg-red-600">
            Next &rarr;
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-black grid grid-cols-1 md:grid-cols-2 items-center rounded-xl overflow-hidden shadow-lg">
                <div className="p-10">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{testimonial.location}</p>
                  <p className="text-white italic text-lg">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="relative h-[400px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


export function TeamSection() {
  const teamMembers = [
    {
      name: 'Michael Jack',
      title: 'Founder CEO',
      image: 'https://cras-next-js.vercel.app/assets/img/member_1.jpg',
    },
    {
      name: 'Cathy Sparkman',
      title: 'Main Mechanic',
      image: 'https://cras-next-js.vercel.app/assets/img/member_2.jpg',
    },
    {
      name: 'Tyra Crawford',
      title: 'Mechanic',
      image: 'https://cras-next-js.vercel.app/assets/img/member_3.jpg',
    },
  ];

  return (
    <div className="bg-zinc-900 py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-extrabold text-white mb-4 relative">
            OUR TEAM
            <span className="absolute -z-10 text-8xl font-extrabold text-gray-800 opacity-30">
              TEAM
            </span>
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-white font-semibold">VIEW MORE</span>
            <div className="w-10 border-b-2 border-red-500"></div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[350px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full  bg-black text-white py-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export function AutomotivePerfection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-white min-h-screen p-6">
      {/* Left Image Section with Triangle Cut */}
      <div className="relative w-full md:w-1/2">
        <div className="relative overflow-hidden">
          {/* Orange Border */}
          <div className="absolute inset-0 clip-diamond border-4 border-orange-500 z-10"></div>

          {/* Image with Triangle Cut */}
          <img
            src="https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1718035222-2314-Audi-S6-John-Olsson-Wrap-Wrapstyle-01-768x432.webp"
            alt="Saboo Detailing Studio"
            className="w-full h-full object-cover clip-diamond"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 p-6 md:pl-12">
        <h1 className="text-4xl font-bold">
          DISCOVER THE ART OF <br />
          <span className="text-orange-500">AUTOMOTIVE PERFECTION</span>
        </h1>
        <p className="mt-4 text-gray-700">
          At Saboo Detailing Studio, we're more than just a detailing service;
          we're automotive artisans dedicated to elevating your driving experience.
          Our team of skilled technicians is driven by a passion for perfection,
          ensuring every vehicle that enters our studio receives meticulous attention
          and care. With years of expertise, we have become a trusted name in the
          automotive detailing industry.
        </p>
        <p className="mt-4 text-gray-700">
          As connoisseurs of precision and masters of automotive aesthetics,
          we welcome you to an immersive experience where your vehicle transforms
          into a work of art. Our commitment to excellence defines us, and your
          journey with us begins here.
        </p>
      </div>
    </div>
  );
}


export function DetailingServices() {
  const services = [
    {
      title: "CERAMIC COATING",
      description: "We apply cutting-edge formulas that create an invisible shield, guarding your vehicle's paint against UV rays, contaminants, and the ravages of time.",
      benefit: "Enhanced gloss, water repellency, and long-lasting protection.",
      image: "https://imgs.search.brave.com/buYS8_dcexjAt7WUKckgoFVGFMbOLG7pB6R4kdqFgyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIxLzQ1LzQx/LzM2MF9GXzYyMTQ1/NDEzM19MNEhGSlZq/azZjbEl4S3BuU2c0/R1JxRmh3RDM2UEky/OS5qcGc"
    },
    {
      title: "PPF (PAINT PROTECTION FILMS)",
      description: "Shield your car's paint from the elements with our premium PPF solutions. Virtually invisible, PPF provides robust defense against stone chips, bug splatter, and road debris.",
      benefit: "Ultimate protection without compromising your vehicle's aesthetics.",
      image: "https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp"
    },
    {
      title: "WRAPPING",
      description: "Unleash your creativity with our professional wrapping services. Choose from a spectrum of colors and finishes to give your vehicle a unique identity.",
      benefit: "Personalized style, temporary or long-term transformations.",
      image: "https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716635679-2290-Dodge-Challener-Punisher-Design-Wrapstyle-jpeg.webp"
    }
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-2">UNMATCHED</h2>
        <h3 className="text-4xl font-bold mb-10">DETAILING SERVICES</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg border-4 border-orange-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-orange-500 mt-4">{service.title}</h4>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <div className="mt-4 p-2 border border-orange-500 text-white inline-block">
                {service.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function SabooAdvantage() {
  const features = [
    {
      title: "EXPERTISE BEYOND COMPARE",
      description:
        "Our technicians are not just skilled; they're automotive enthusiasts trained in the latest detailing techniques. We bring a wealth of experience to every project.",
      icon: "https://img.freepik.com/free-vector/person-working-support_1212-37.jpg?semt=ais_hybrid",
    },
    {
      title: "QUALITY PRODUCTS",

      description:
        "We use only the finest ceramic coatings, PPF, and wrapping materials available in the market. Our commitment to quality ensures that your vehicle gets the best treatment.",
      icon: "/icons/quality.svg",
    },
    {
      title: "TAILORED SOLUTIONS",
      description:
        "Your vehicle is unique, and so are your preferences. Our customization options allow you to tailor our services to meet your specific needs, ensuring a bespoke touch for every client.",
      icon: "/icons/solutions.svg",
    },
    {
      title: "STATE-OF-THE-ART FACILITY",
      description:
        "Immerse your vehicle in the care it deserves within our state-of-the-art facility, equipped with advanced tools and technology to elevate the detailing experience, we utilize cutting-edge methods for superior results.",
      icon: "/icons/facility.svg",
    },
    {
      title: "DEDICATED CUSTOMER SUPPORT",
      description:
        "Enjoy a seamless customer experience with our dedicated support team. We're here to address your queries, guide you through our services, and ensure your complete satisfaction.",
      icon: "https://img.freepik.com/free-vector/person-working-support_1212-37.jpg?semt=ais_hybrid",
    },
  ];

  return (
    <div className="bg-black py-10 px-4 md:px-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          THE SABOO <span className="text-orange-500">ADVANTAGE</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Choose Saboo Detailing Studio for a transformative automotive experience — where craftsmanship, innovation, and customer-centricity converge to redefine excellence in every detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div key={index} className=" p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={feature.icon}
                alt=''
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-xl font-semibold text-orange-500">
              {feature.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


 





import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function StatsSection() {
  const stats = [
    { value: 2, label: "YEARS OF SERVICE" },
    { value: 25, label: "HAPPY CUSTOMERS" },
    { value: 25, label: "CUSTOMER SATISFACTION" },
  ];

  const [counts, setCounts] = useState<number[]>(Array(stats.length).fill(0));
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects scroll into view

  useEffect(() => {
    if (!inView) return; // Start animation only when in view

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        let allReached = true;
        const newCounts = prevCounts.map((count, index) => {
          if (count < stats[index].value) {
            allReached = false;
            return count + Math.ceil(stats[index].value / 100);
          }
          return count;
        });

        if (allReached) clearInterval(interval);
        return newCounts;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [inView]); // Runs when element is in view

  return (
    <div className="bg-black text-white py-12" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:space-x-52">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2
              className="text-5xl md:text-6xl font-bold text-red-600"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                WebkitTextStroke: "1px black",
                color: "red",
              }}
            >
              {counts[index]}+
            </h2>
            <p className="text-lg md:text-xl font-semibold mt-2 text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



import {  Variants } from "framer-motion";

const services = [
  {
    title: "Performance Upgrades and Customization",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png",
  },
  {
    title: "Engine Tuning and Maintenance",
    description:
      "We provide professional engine tuning and maintenance to ensure your vehicle runs at peak performance.",
    image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png",
  },
  {
    title: "Luxury Car Modifications",
    description:
      "Upgrade your car with high-end modifications and premium parts to give it a unique and stylish look.",
    image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png",
  },
];

// Variants for animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function DedicatedServices() {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => console.log("Entered Viewport")} 
          className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-300"
        >
          Dedicated <span className="text-white">Services</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-400 mt-4 max-w-2xl"
        >
          Explore our premium car services designed to enhance performance and style.
        </motion.p>

        {/* View All Services */}
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          href="#"
          className="inline-block mt-6 text-red-600 border-b border-red-600 hover:text-white transition-all duration-300"
        >
          VIEW ALL SERVICES
        </motion.a>

        {/* Services List - Animated */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Left Side: Image for Odd, Text for Even */}
              {index % 2 === 0 ? (
                <>
                  {/* Image */}
                  <motion.div variants={itemVariants}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-40 object-cover"
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.div variants={itemVariants} className="text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-400 mt-3">{service.description}</p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-red-600 border-b border-red-600 hover:text-white transition-all duration-300"
                    >
                      VIEW MORE
                    </a>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Text */}
                  <motion.div variants={itemVariants} className="text-white order-2 md:order-1">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-400 mt-3">{service.description}</p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-red-600 border-b border-red-600 hover:text-white transition-all duration-300"
                    >
                      VIEW MORE
                    </a>
                  </motion.div>

                  {/* Image */}
                  <motion.div variants={itemVariants} className="order-1 md:order-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


import { useRef } from 'react';


const blogPosts = [
  {
    date: '17.10.2023',
    title: 'The Importance of Regular Car Maintenance',
    image: 'https://cras-next-js.vercel.app/assets/img/blog_3.jpg',
  },
  {
    date: '05.11.2023',
    title: 'The Roadmap to Reliability: Essential Car Care Tips',
    image: 'https://cras-next-js.vercel.app/assets/img/blog_1.jpg',
  },
  {
    date: '12.11.2023',
    title: "From Garage to Glory: Transform Your Vehicle's Health",
    image: 'https://cras-next-js.vercel.app/assets/img/blog_2.jpg',
  },
];

export  function BlogNewsSection() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-black text-white py-16 px-8 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold uppercase text-gray-300">
          BLOG / <span className="text-white">NEWS</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.
        </p>
      </div>
      
      <motion.div
        ref={scrollRef}
        className="mt-12 flex gap-8 overflow-x-auto scrollbar-hide px-8"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] md:min-w-[400px] bg-black shadow-lg rounded-lg overflow-hidden relative"
           // whileHover={{ scale: 1.05 }}
          >
            <Image src={post.image} alt={post.title} width={400} height={250} className="object-cover w-full h-64 hover:scale-125 hover:duration-1000 " />
            <div className="p-5 space-y-5">
              <p className="text-white text-sm font-extralight">{post.date}</p>
              <h3 className="text-xl  text-white mt-1 hover:text-red-700 font-extrabold ">{post.title}</h3>
              <a
                href="#"
                className="inline-block mt-3 text-red-600 border-b border-red-600 hover:text-white transition duration-300"
              >
                READ MORE
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="absolute bottom-5 right-5">
        <button className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition"
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ⬆
        </button>
      </div>
    </section>
  );
}
