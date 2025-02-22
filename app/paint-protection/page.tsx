
import React from 'react';
import Image from 'next/image';
import { ServiceCards } from '../Car-Wrapping/page';

const Page = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_1_v3.jpg"
          alt="PPF"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">Paint Protection</h1>
          <p className="mt-4 text-2xl drop-shadow-md">For those who really love cars.</p>
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
<PPFSection/>
<ServiceCards/>
    </div>
  );
};

export default Page;




const PPFSection = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">EXPLORE OUR PPF SOLUTIONS</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We use top-quality films from brands like <strong>SunTek</strong>, <strong>3M</strong>, and <strong>XPEL</strong> for our <strong>PPF car paint protection services</strong>.
            These options include:
          </p>

          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <strong>PPF Car Film:</strong> A durable, high-gloss layer that guards against scratches, dirt, and weather elements.
            </li>
            <li>
              <strong>Matte PPF:</strong> Perfect for achieving a stylish, frosted look while providing the same level of protection.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-black mt-8 mb-4">
            Why Choose WrapStyle Sydney for your car Paint Protection Film installation?
          </h3>

          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              We offer excellent customer service and personalized <strong>ppf ppf solutions</strong> for all vehicles. Our services include <strong>matte auto PPF</strong> for a sleek look and paint protection.
            </li>
            <li>
              Our products like <strong>ceramic paint protection</strong> and <strong>PPF shield car paint</strong> protect from damage and UV rays from the Australian sun.
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://wheelforcestudio.com/wp-content/uploads/2022/09/Car-Paint-Protection-Film-2.jpg" // Make sure to place image.png in your /public folder
            alt="PPF Car"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
      {/* Second Section - Blue Car */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://media.istockphoto.com/id/1765960983/photo/car-cleaning-and-washing-with-foam-soap.jpg?s=612x612&w=0&k=20&c=0pM3XwT6SMShf_RH_WFuc4PaqoHR6oYPIgVvpB_rB9k=" // Add your blue car image in the public folder
            alt="Blue Car PPF"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">PROTECT YOUR CAR PAINT WITH WRAPSTYLE SYDNEY</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ready to protect your vehicle’s high gloss painted surface against bird droppings, road debris, bug splatters, acid rain, wear and tear with <strong>PPF wrap</strong>.
            Contact us for top-notch <strong>paint protection service in Sydney</strong>. If you’re looking for <strong>PPF near you</strong> or need <strong>car paint protection</strong>,
            we can help you choose the best option for your vehicle.
          </p>

          <h3 className="text-xl font-semibold text-black mb-4">PPF Car Protection: The Best Solution</h3>
          <p className="text-lg text-gray-700 mb-4">
            No better product to protect your car from stone chips and scratches than applying <strong>PPF car film</strong>.
            <strong> Car paint protection films</strong> provide robust defense against stones and debris.
          </p>

          <h3 className="text-xl font-semibold text-black mb-4">Benefits of PPF Car Film</h3>
          <p className="text-lg text-gray-700">
            <strong>Protective films</strong> can protect your car’s paint from scratches and chips caused by rocks or gravel while driving. When used correctly, the top coat film can fix minor scratches or dings.
          </p>
        </div>
      </div>

      <div className="bg-white py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">



        {/*third-content*/}
        {/* Left Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            SELF-HEALING PROPERTIES OF PPF
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Because of its self-repairing capabilities, this damage vanishes in a matter of minutes.
          </p>

          <h3 className="text-xl font-semibold text-black mb-2">
            Importance of Skilled PPF Installation
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Expert <strong>PPF</strong> technicians <strong>wrap the film</strong> around each panel of your vehicle for a seamless look and better protection.
          </p>

          <h3 className="text-xl font-semibold text-black mb-2">
            Advantages of Paint Protection Film
          </h3>
          <p className="text-lg text-gray-700">
            <strong>Paint protection film</strong> shields your car from scratches, rock chips, stains, rust, chemicals, bugs, and debris on the road.
            High-quality <strong>PPF</strong>, such as <strong>SunTek PPF</strong>, <strong>3M PPF</strong>, and <strong>XPEL PPF</strong>, can even heal minor scratches when exposed to heat.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://media.istockphoto.com/id/494155654/photo/car-light.jpg?s=612x612&w=0&k=20&c=14KroyopN5Z1MCUqDjN2Yikn1gXsFXyk8e_LAxM0XqQ=" // Save your orange car image in the public folder
            alt="Self-Healing PPF"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>

    {/*FOURTH SECTION*/}
    <div className="bg-white py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="relative w-full h-[500px]">
          <Image
            src="https://media.istockphoto.com/id/1366537953/photo/car-detailing-man-applies-nano-protective-coating-to-the-car-in-car-detailing-service.jpg?s=612x612&w=0&k=20&c=YiFY7BlWjEqSVb5kKOhYa4PY4kq6xDAtTAUDRvS83Ag=" // Ensure this image is placed in the public folder
            alt="PPF Installation"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            BENEFITS OF PPF CAR FILM
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Applying car PPF film</strong> to high-risk areas like the front bumper, hood, fenders, and mirrors ensures your car stays in pristine condition. Our <strong>automobile PPF</strong> materials are strong and almost invisible, providing robust protection against impacts from stones and debris.
          </p>

          <h3 className="text-xl font-semibold text-black mb-2">
            Self-Healing and UV Protection
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our <strong>highly recommended clear film</strong> protects your car’s paint from scratches and UV rays, preventing damage to the clear coat. Protective car wrap can also self-heal minor scratches when heated.
          </p>

          <h3 className="text-xl font-semibold text-black mb-2">
            Find Paint Protection Film Near Me
          </h3>
          <p className="text-lg text-gray-700">
            We offer solutions for <strong>PPF in Australia</strong>, such as <strong>3M Scotchgard paint protection film</strong> and top brands like <strong>XPEL</strong>, <strong>3M</strong>, <strong>AVERY PPF</strong>, and <strong>HEXIS Bodyfence paint protection film</strong>.
          </p>
        </div>
      </div>
    </div>



    </div>
  );
};


