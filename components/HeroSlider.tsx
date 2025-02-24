"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";


export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png", // Place the image in the public folder
      title: "AUTOMOTIVE REPAIR MAINTENANCE",
      description:
        "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best.",
    },
    {
        id: 2,
        image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png", // Place the image in the public folder
        title: "AUTOMOTIVE REPAIR MAINTENANCE",
        description:
          "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best.",
      },
      {
        id: 3,
        image: "https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png", // Place the image in the public folder
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
            <Image
              src={slide.image}
              alt="Automotive Repair"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="text-5xl font-extrabold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
                  APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Services/>
    <WhyChooseUs/>
    <AutomotivePerfection/>
    <DetailingServices/>
    <TestimonialSlider/>
    <TeamSection/>
   
    </>
   
  );
}




const services = [
  { id: 1, title: "PERFORMANCE CHECK", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: "🚗" },
  { id: 2, title: "AUTO REPAIR", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: "🔧" },
  { id: 3, title: "FLEET SERVICES", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", icon: "🚛" },
];

 export function Services() {
  return (
    <div className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.4 }}
            viewport={{ once: true }}
            className=" p-8  bg-black  shadow-lg text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}




  export function WhyChooseUs() {
  const features = [
    "CERTIFIED TECHNICIANS",
    "COMPREHENSIVE REPAIR SERVICES",
    "900 FIVE STAR REVIEWS",
    "WARRANTY ON REPAIRS",
  ];

  return (
    <div className="relative bg-black text-white py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/mechanic.jpg')" }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            WHY CHOOSE US
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </motion.p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-bold tracking-wide"
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.button
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 font-bold rounded"
          >
            VIEW MORE
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <motion.img
            src="https://cras-next-js.vercel.app/assets/img/choose-us.png"
            alt="Mechanic"
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full rounded-xl shadow-lg"
          />
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
  

  export  function AutomotivePerfection() {
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


export  function DetailingServices() {
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


