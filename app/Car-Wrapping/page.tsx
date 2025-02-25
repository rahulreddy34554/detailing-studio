// app/components/HeroSection.jsx
import ServiceCards from '@/components/ServiceCards';
import Image from 'next/image';

export default function HeroSection() {
  return (
   
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
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
      {/* <div className="w-full bg-zinc-500 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Premium Car Wraps in Sydney</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">WrapStyle Sydney</span>, your go-to destination for
            <span className="font-bold"> high-quality car wraps </span> in Sydney. With
            <span className="font-semibold"> years of experience</span>, we specialize in transforming vehicles with our
            expert <span className="font-bold">car wrapping</span> services and <span className="font-bold">vehicle graphics</span>.
          </p>
        </div>
      </div> */}
      <WrappingSection/>
      <WrappingInfo/>
     <WhyChooseCarWraps/>
     {/* <ColorWrap/> */}
     <ServiceCards/>
    </div>
  );
} 


// app/components/WhyChooseCarWraps.jsx



 function WhyChooseCarWraps() {
  return (
    <>
     {/*  <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center py-12 px-6 bg-black text-white">
    Text Section */}
      {/* <div>
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
      </div> */}

      {/* Image Section */}
      {/* <div className="relative w-full h-[500px]  ">
        <Image
          src="https://cras-next-js.vercel.app/assets/img/hero_slider_bg_1.png"
          alt="Car Wrap Example"
          layout="fill"
          objectFit="cover"
          className="rounded-lg "
        />
      </div> 
      </div>*/}
     <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center py-12 px-6  bg-white text-black">
     

     
     {/* Text Section */}
     <div>
       <h2 className="text-4xl font-extrabold text-orange-500 mb-6">Expert Car Wrapping Near You</h2>
       <p className="text-lg  mb-4">
         <span className="font-bold">At WrapStyle Sydney, we provide top-notch</span> vinyl wrapping services right here in Sydney. Our team uses the latest techniques and premium materials, such as 3M car wrap vinyl ensuring a flawless finish. With 15 years of experience, we guarantee the best results for your vehicle.
         <span className="font-bold"> Car owners</span> can choose from a variety of <span className="font-bold">vehicle wrap colours</span>,
         including <span className="font-bold">gloss black car wrap</span> or <span className="font-bold">chrome vinyl wrap</span>.
       </p>
       <p className="text-lg  mb-4">
         Our vehicle <span className="font-bold">wrap vinyl</span> is durable, easy to maintain, and perfect for both personal and commercial vehicles.
         We <span className="font-bold">highly recommend vinyl film</span> for anyone looking to make a statement on the road.
       </p>
       <h3 className="text-xl font-semibold text-orange-500 mt-6">Car Wrap Ideas</h3>
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

  
   </>
  );
}



 function WrappingSection() {
    return (
        <section className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="lg:w-1/2 w-full p-5">
                    <h1 className="text-5xl font-bold text-gray-300 mb-6">WRAPPING</h1>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={50}
                                    height={50}
                                />
                                <p className="mt-2 text-orange-500 font-semibold">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-full relative">
                    <div className="relative">
                        <Image
                            src="https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1695047117-2276-Alfa-Romeo-Stelvio-3-2-1-jpeg.webp"
                            alt="Wrapping Car"
                            width={900}
                            height={500}
                            className="w-full h-auto rounded-lg "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Features Array
const features = [
    { title: "HYDROPHOBIC", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2oIcKuhsPsOc6oQp4HmFq-PJZXWSW8OvQ&s" },
    { title: "SELF HEALING", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWCKZVvADWR4b1W8kmaFs2yMF-Pf9Qj2UJg&s" },
    { title: "NON YELLOWING", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2oIcKuhsPsOc6oQp4HmFq-PJZXWSW8OvQ&s" },
    { title: "HIGH STRETCHABILITY", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2oIcKuhsPsOc6oQp4HmFq-PJZXWSW8OvQ&s" },
    { title: "100% UV BLOCKING", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2oIcKuhsPsOc6oQp4HmFq-PJZXWSW8OvQ&s" },
    { title: "IMPACT RESISTANT", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2oIcKuhsPsOc6oQp4HmFq-PJZXWSW8OvQ&s" },
];




 function WrappingInfo() {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
                {/* Left Side - Car Image */}
                <div className="lg:w-1/2 w-full relative">
                    <div className="relative">
                        {/* Background Design */}
                        {/* <div className="absolute -z-10 top-10 right-0 w-full h-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 500 500"
                                fill="none"
                                className="w-[500px] h-[500px] opacity-20"
                            >
                                <path
                                    d="M250 0C387.5 0 500 112.5 500 250C500 387.5 387.5 500 250 500C112.5 500 0 387.5 0 250C0 112.5 112.5 0 250 0Z"
                                    stroke="#FF5722"
                                    strokeWidth="10"
                                    fill="none"
                                />
                            </svg>
                        </div> */}

                        {/* Car Image */}
                        <Image
                            src="https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716805060-2303-Ford-Bronco-2-768x432.webp"
                            alt="Wrapping Car"
                            width={700}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-5xl font-bold text-black leading-tight">
                        PERSONALIZED AESTHETICS,
                    </h1>
                    <h1 className="text-5xl font-bold text-orange-500 mb-6">
                        ENDLESS POSSIBILITIES
                    </h1>

                    {/* What is Wrapping */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-orange-500">
                            WHAT IS WRAPPING?
                        </h2>
                        <p className="text-gray-700 mt-2">
                            Vehicle wrapping involves applying a vinyl film to the exterior of your vehicle,
                            allowing for a temporary or long-term change in color, texture, or finish.
                            It provides an additional layer of protection for your vehicle's factory paint,
                            shielding it from stone chips, minor abrasions, and environmental elements.
                        </p>
                    </div>

                    {/* Unleash Your Style */}
                    <div>
                        <h2 className="text-xl font-semibold text-orange-500">
                            UNLEASH YOUR STYLE
                        </h2>
                        <p className="text-gray-700 mt-2">
                            Our Vehicle Wrapping service opens up a world of possibilities for expressing individuality.
                            Whether you desire a sleek matte finish, vibrant color change, or custom design,
                            our expert team brings your vision to life. Make a statement with personalized aesthetics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}




 function ColorWrap() {
    const categories = [
        {
            name: 'Gloss',
            colors: [
                { name: 'Cinder Spark Red', code: 'GP253', color: '#8C2F39' },
                { name: 'Deep Orange', code: 'G24', color: '#F36C3D' },
                { name: 'Dragon Fire Red', code: 'G363', color: '#D6202A' },
                { name: 'Bright', code: 'G15', color: '#FFD700' },
                { name: 'Cosmic Blu', code: 'G377', color: '#0047AB' },
                { name: 'Ice Blu', code: '7', color: '#6E91A4' },
                { name: 'Black Metallic', code: 'G212', color: '#1C1C1C' },
                { name: 'Liquid Copper', code: 'G344', color: '#E76F51' },
            ],
        },
        {
            name: 'Satin',
            colors: [
                { name: 'Vampire Red', code: 'SP273', color: '#6B0F1A' },
                { name: 'Smoldering Red', code: 'S363', color: '#B71C1C' },
                { name: 'Canyon Copper', code: 'S344', color: '#D2691E' },
                { name: 'Bitter Yellow', code: 'S335', color: '#D9A404' },
                { name: 'Apple Green', code: 'S196', color: '#4CAF50' },
                { name: 'Key West', code: 'S57', color: '#76EEC6' },
                { name: 'Ocean Shimmer', code: 'S327', color: '#0077B6' },
                { name: 'Perfect Blue', code: 'S347', color: '#0071C5' },
            ],
        },
        {
            name: 'Matte',
            colors: [
                { name: 'Red Metallic', code: 'M203', color: '#8B0000' },
                { name: 'Red', code: 'M13', color: '#FF0000' },
                { name: 'Orange', code: 'M54', color: '#FF8C00' },
                { name: 'Pine Green Metallic', code: 'M206', color: '#2E8B57' },
                { name: 'Military Green', code: 'M26', color: '#556B2F' },
                { name: 'Indigo', code: 'M27', color: '#2C3E50' },
                { name: 'Slate Blue Metallic', code: 'M217', color: '#2F4F4F' },
                { name: 'Blue Metallic', code: 'M227', color: '#1E90FF' },
            ],
        },
    ];

    return (
        <div className="bg-white p-10">
            <h1 className="text-4xl font-bold">CREATE A SENSATION</h1>
            <h2 className="text-3xl font-semibold text-orange-600">WITH COLOR WRAP</h2>

            {categories.map((category) => (
                <div key={category.name} className="mt-8">
                    <h3 className="text-2xl font-semibold border-b-2 border-black inline-block">
                        {category.name}
                    </h3>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {category.colors.map((color) => (
                            <div key={color.code} className="text-center">
                                <div
                                    className="h-20 rounded-lg"
                                    style={{ backgroundColor: color.color }}
                                ></div>
                                <p className="mt-2 font-semibold">{color.name}</p>
                                <p className="text-sm text-gray-500">{color.code}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}