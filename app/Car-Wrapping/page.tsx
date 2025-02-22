// app/components/HeroSection.jsx

import { WhyChooseUs } from '@/components/HeroSlider';
import Image from 'next/image';

export default function HeroSection() {
  return (
   
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="https://png.pngtree.com/background/20230414/original/pngtree-speeding-racing-car-neon-illustration-background-picture-image_2424792.jpg"
          alt="Car Wrapping"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">CAR WRAPPING</h1>
          <p className="mt-4 text-2xl drop-shadow-md">We are making cars cool.</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full bg-zinc-500 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Premium Car Wraps in Sydney</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">WrapStyle Sydney</span>, your go-to destination for
            <span className="font-bold"> high-quality car wraps </span> in Sydney. With
            <span className="font-semibold"> years of experience</span>, we specialize in transforming vehicles with our
            expert <span className="font-bold">car wrapping</span> services and <span className="font-bold">vehicle graphics</span>.
          </p>
        </div>
      </div>
      <WhyChooseCarWraps/>
    </div>
  );
} 


// app/components/WhyChooseCarWraps.jsx



export function WhyChooseCarWraps() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center py-12 px-6 bg-black text-white">
      {/* Text Section */}
      <div>
        <h2 className="text-4xl font-extrabold  mb-6">WHY CHOOSE CAR WRAPS?</h2>
        <p className="text-lg  mb-4">
          <span className="font-bold">Car wraps</span> are a cost-effective and stylish way to customise your vehicle.
          <span className="font-bold"> Car owners</span> can choose from a variety of <span className="font-bold">vehicle wrap colours</span>,
          including <span className="font-bold">gloss black car wrap</span> or <span className="font-bold">chrome vinyl wrap</span>.
        </p>
        <p className="text-lg  mb-4">
          Our vehicle <span className="font-bold">wrap vinyl</span> is durable, easy to maintain, and perfect for both personal and commercial vehicles.
          We <span className="font-bold">highly recommend vinyl film</span> for anyone looking to make a statement on the road.
        </p>
        <h3 className="text-xl font-semibold  mt-6">Car Wrap Ideas</h3>
        <p className="text-lg ">
          Our team can help you with creative <span className="font-bold">car wrap ideas</span> to make your vehicle stand out.
          Whether you prefer a subtle change or a bold new look, we have the expertise to bring your vision to life.
          We offer all from <span className="font-bold">vehicle graphics</span> to <span className="font-bold">custom designs</span>.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[500px]  ">
        <Image
          src="https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png"
          alt="Car Wrap Example"
          layout="fill"
          objectFit="cover"
          className="rounded-lg "
        />
      </div>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center py-12 px-6 bg-black text-white">
     

     {/* Image Section */}
     <div className="relative w-full h-[500px]  ">
       <Image
         src="https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png"
         alt="Car Wrap Example"
         layout="fill"
         objectFit="cover"
         className="rounded-lg "
       />
     </div>
     {/* Text Section */}
     <div>
       <h2 className="text-4xl font-extrabold  mb-6">Expert Car Wrapping Near You</h2>
       <p className="text-lg  mb-4">
         <span className="font-bold">At WrapStyle Sydney, we provide top-notch</span> vinyl wrapping services right here in Sydney. Our team uses the latest techniques and premium materials, such as 3M car wrap vinyl ensuring a flawless finish. With 15 years of experience, we guarantee the best results for your vehicle.
         <span className="font-bold"> Car owners</span> can choose from a variety of <span className="font-bold">vehicle wrap colours</span>,
         including <span className="font-bold">gloss black car wrap</span> or <span className="font-bold">chrome vinyl wrap</span>.
       </p>
       <p className="text-lg  mb-4">
         Our vehicle <span className="font-bold">wrap vinyl</span> is durable, easy to maintain, and perfect for both personal and commercial vehicles.
         We <span className="font-bold">highly recommend vinyl film</span> for anyone looking to make a statement on the road.
       </p>
       <h3 className="text-xl font-semibold  mt-6">Car Wrap Ideas</h3>
       <p className="text-lg ">
         Our team can help you with creative <span className="font-bold">car wrap ideas</span> to make your vehicle stand out.
         Whether you prefer a subtle change or a bold new look, we have the expertise to bring your vision to life.
         We offer all from <span className="font-bold">vehicle graphics</span> to <span className="font-bold">custom designs</span>.
       </p>
     </div>
   </div>
   <ServiceCards/>
   </>
  );
}




const services = [
  { title: 'CAR WRAPPING', image: 'https://media.istockphoto.com/id/1161233893/vector/sport-car-decal-wrap-design-vector-graphic-abstract-stripe-racing-background-kit-designs-for.jpg?s=612x612&w=0&k=20&c=rw5YKlGXnYfSY5LmVZDQbIMfr9tN0jHdmK_Jt-UsinQ=', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_01_wrapping_icon-1.png' },
  { title: 'PAINT PROTECTION', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5wrAU6zmQ1j5yOR4JewcvjjU1wR95gDv1g&s', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_02_protection_icon-1.png' },
  { title: 'COLOUR PPF', image: 'https://media.istockphoto.com/id/1446278856/vector/racing-car-wrap-design-vector-for-race-car-graphic-abstract-stripe-racing-background-kit.jpg?s=612x612&w=0&k=20&c=5dW5KMgL8DdrTLQzoTfGWoymWAzDMYamDwtyDLAkUNg=', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_04_tinting_icon-1.png' },
 
  
];

export  function ServiceCards() {
  return (
    <div className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <h3 className="text-white text-lg font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
