import React from 'react'
import Image from 'next/image'




const page = () => {
  return (
    <div className='overflow-hidden pt-20'>
        <CeramicCoating/>
        <ApplicationProcess/>
        <ScienceBehindBrilliance/>
        <CeramicProtection/>
        <PreservationSection/>
        {/* <Pricing/> */}
        <PackageOptions/>
    </div>
  )
}

export default page

  function CeramicCoating() {
    const features = [
        { icon: "https://c8.alamy.com/comp/2B7ECMP/outline-shield-icon-isolated-black-vector-shield-icon-shield-in-flat-linear-style-2B7ECMP.jpg", title: "Self-Cleaning Effect", subtitle: "Super-Hydrophobic Effect" },
        { icon: "https://c8.alamy.com/comp/2B7ECMP/outline-shield-icon-isolated-black-vector-shield-icon-shield-in-flat-linear-style-2B7ECMP.jpg", title: "Permanent Protection", subtitle: "" },
        { icon: "https://m.media-amazon.com/images/I/71IQE7kJPML._AC_UY1100_.jpg", title: "Extreme Gloss", subtitle: "" },
        { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-wpHHBd7bAFLAZd3l9B9pRiDMBUTlKL9Jw&s", title: "UV Protection", subtitle: "" },
        { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwYGFFg4XPG5sa911V0Njs18m7fkSbfaCaQ&s", title: "9H", subtitle: "Hardness Above 9H" },
        { icon: "https://img.freepik.com/premium-vector/sparkles-icon-set-glitter-shine-spark-vector-symbol-clean-gloss-stars-sign-bright-shiny-glow-starburst-icon-magic-stars-pictogram-black-filled-outlined-style_268104-21946.jpg", title: "High-Gloss Shine", subtitle: "" },
    ];

    return (
        <div className="bg-black text-white py-14">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-5xl font-bold mb-10">CERAMIC COATING</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left - Features */}
                    <div className="grid grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-12 h-12"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                    {feature.subtitle && (
                                        <p className="text-orange-500 text-sm">
                                            {feature.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Car Image */}
                    <div className="relative">
                        <img
                            src="http://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_2_v3.jpg"
                            alt="Ceramic Coating Car"
                            className="w-full drop-shadow-lg scale-x-[-1]"
                          //  style={{ transform: 'rotate(25deg)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}



const ApplicationProcess = () => {
    const steps = [
        {
            title: 'SURFACE PREPARATION',
            description: 'Before anything else, we meticulously clean and decontaminate every inch of your car, ensuring a pristine canvas for the Ceramic Coating.',
        },
        {
            title: 'PAINT CORRECTION (IF NEEDED)',
            description: "If your car's paint needs a little extra love, our skilled team addresses imperfections and swirl marks through careful paint correction.",
        },
        {
            title: 'APPLICATION',
            description: "Our expert technicians apply the Ceramic Coating with precision, ensuring a uniform layer across your car's surface for enhanced protection.",
        },
        {
            title: 'CURING',
            description: 'We allow the coating to cure, giving it the time it needs to form a robust bond with your car’s paint, creating a shield that stands the test of time.',
        },
        {
            title: 'FINAL INSPECTION',
            description: 'Every detail matters. Our team conducts a rigorous final inspection, ensuring that the Ceramic Coating adheres seamlessly and that your car leaves our studio in impeccable condition.',
        },
    ];

    return (
        <div className="bg-black text-white py-10 px-4 md:px-20">
            <h1 className="text-4xl font-bold text-center">
                THE ART OF <span className="text-orange-500">CERAMIC COATING</span> APPLICATION
            </h1>
            <p className="text-center text-gray-300 mt-4 max-w-4xl mx-auto">
                The application process of Ceramic Coating at Saboo Detailing Studio is a meticulous craft, ensuring not just protection but an exquisite finish that transforms your vehicle into a masterpiece. Step into the realm where every layer counts, and brilliance is not just a result but an art form.
            </p>

            <div className="mt-10">
                <h2 className="bg-gray-700 inline-block px-4 py-2 font-semibold">APPLICATION PROCESS</h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center border-r border-gray-600 last:border-r-0">
                            <h3 className="text-orange-500 font-bold text-lg mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {step.description}
                            </p>
                            {index < steps.length - 1 && (
                                <div className="text-orange-500 text-2xl mt-4">&rarr;</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


  function ScienceBehindBrilliance() {
    return (
        <div className="bg-black text-white py-10 px-6 md:px-16">
            <h1 className="text-4xl font-bold">
                THE SCIENCE BEHIND <span className="text-orange-500">BRILLIANCE</span>
            </h1>
            <p className="mt-4 text-lg">
                Ceramic coating leverages nanotechnology to create a protective layer on your vehicle's surface. This microscopic layer forms a molecular bond with the paint, providing benefits beyond traditional protective measures. Each additional layer acts as an extra shield, fortifying your vehicle against the elements and extending the longevity of its pristine finish.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left side - Layers */}
                <div className="space-y-6">
                    {['BASE', 'LAYER 2', 'LAYER 3', 'LAYER 4'].map((layer, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="w-32 h-10 bg-orange-500 rounded-full relative overflow-hidden">
                                <div className="absolute inset-0 w-full h-full bg-white" style={{ clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)' }}></div>
                            </div>
                            <span className="text-orange-500 font-bold">{layer}</span>
                        </div>
                    ))}
                </div>

                {/* Right side - Descriptions */}
                <div className="space-y-8 text-sm">
                    <div>
                        <h3 className="text-orange-500 font-semibold">BASE</h3>
                        <p>Your vehicle's metal body is akin to an intricate landscape, featuring microscopic bumps, irregularities, and pores. These nuances expose the metal to environmental contaminants, dust, and UV rays, leading to gradual degradation.</p>
                    </div>
                    <div>
                        <h3 className="text-orange-500 font-semibold">LAYER 2</h3>
                        <p>Ultra-small particles work into microscopic imperfections, filling gaps and acting as armor against elements, ensuring water beads off effortlessly and preserving your vehicle's pristine finish.</p>
                    </div>
                    <div>
                        <h3 className="text-orange-500 font-semibold">LAYER 3</h3>
                        <p>Nano particles bond with the metal, creating an invisible barrier that prevents contaminants from reaching the paint surface. This layer defends against road salt, bird droppings, and bug splatter.</p>
                    </div>
                    <div>
                        <h3 className="text-orange-500 font-semibold">LAYER 4</h3>
                        <p>Advanced formulas in Ceramic Pro contribute to an unparalleled gloss finish while fortifying resistance to scratches, stains, and fading, keeping your car sparkling with a mesmerizing shine.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}





// const Pricing = () => {
//     const models = [
//         { model: "CELERIO", price: "25,000" },
//         { model: "S-PRESSO", price: "25,000" },
//         { model: "SWIFT", price: "25,000" },
//         { model: "ALTO", price: "25,000" },
//         { model: "ALTO K10", price: "25,000" },
//         { model: "WAGONR", price: "25,000" },
//         { model: "EECO", price: "30,000" },
//         { model: "DZIRE", price: "35,000" },
//         { model: "ERTIGA", price: "35,000" },
//         { model: "BREZZA", price: "35,000" }
//     ];

//     const packages = [
//         {
//             name: "BRONZE",
//             features: [
//                 "1 Layer of Ceramic Pro 9H",
//                 "1 Layer of Ceramic Pro Top Coat",
//                 "1 Layer of Ceramic Pro Glass (front glass)",
//                 "Micro Fiber Towel - 2 Nos.",
//                 "First Ceramic Pro Foam Wash",
//                 "1 Year Warranty"
//             ],
//             prices: ["25,000", "25,000", "25,000", "25,000", "25,000", "25,000", "30,000", "35,000", "35,000"]
//         },
//         {
//             name: "SILVER",
//             features: [
//                 "2 Layers of Ceramic Pro 9H",
//                 "1 Layer of Ceramic Pro Top Coat",
//                 "1 Layer of Ceramic Pro Glass (front & back)",
//                 "1 Layer of Ceramic Pro Plastic (exterior)",
//                 "1 Layer of Wheel",
//                 "Micro Fiber Towel - 2 Nos.",
//                 "First Ceramic Pro Foam Wash",
//                 "2 Years Warranty"
//             ],
//             prices: ["35,000", "35,000", "35,000", "35,000", "35,000", "35,000", "40,000", "45,000", "45,000"]
//         },
//         {
//             name: "GOLD",
//             features: [
//                 "3 Layers of Ceramic Pro 9H",
//                 "1 Layer of Ceramic Pro Top Coat",
//                 "1 Layer of Ceramic Pro Glass (all glasses)",
//                 "2 Layers of Ceramic Pro Plastic (exterior)",
//                 "2 Layers of Wheel",
//                 "Micro Fiber Towel - 2 Nos.",
//                 "First Ceramic Pro Foam Wash",
//                 "5 Years Warranty"
//             ],
//             prices: ["45,000", "45,000", "45,000", "45,000", "45,000", "45,000", "55,000", "60,000", "60,000"]
//         }
//     ];

//     return (
//         <div className="bg-black text-white py-12 px-4 md:px-16">
//             <h1 className="text-4xl font-bold text-center">
//                 UNMATCHED PROTECTION, <span className="text-orange-500">UNBEATABLE VALUE</span>
//             </h1>
//             <p className="text-center mt-4">
//                 At Saboo Detailing Studio, we understand that each vehicle is unique, and so are the needs of our clients. Explore our meticulously crafted packages, designed to enhance and protect your investment with the brilliance of Ceramic Coating.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
//                 {/* Car Models */}
//                 <div className="border border-orange-500 p-4">
//                     <h2 className="text-xl font-bold mb-4">MODEL</h2>
//                     {models.map((car, index) => (
//                         <div key={index} className="border-b border-gray-600 py-2">
//                             <span>{car.model}</span>
//                         </div>
//                     ))}
//                 </div>

               

//                 {/* Packages */}
//                 {packages.map((pkg, index) => (
//                     <div key={index} className="border border-orange-500 p-4">
//                         <h2 className="text-2xl font-bold text-orange-500">{pkg.name}</h2>
//                         {pkg.features.map((feature, i) => (
//                             <div key={i} className="flex justify-between border-b border-gray-600 py-1">
//                                 <span>{feature}</span>
//                                 <span className="font-semibold">₹{pkg.prices[i]}</span>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };








const CeramicProtection = () => {
    const features = [
        { title: "REPEL DUST, WATER AND OTHER CONTAINMENTS", description: "The coating is super hydrophobic causing any dirt, dust or grime to simply encapsulate on the surface and roll off." },
        { title: "MOLECULAR BONDING", description: "Ceramic nanoparticles form an unbreakable bond with the factory paint, creating a protective layer resistant to external elements." },
        { title: "UV RAY RESISTANCE", description: "Shields against UV rays, preventing oxidation and fading, maintaining your vehicle's original vibrancy." },
        { title: "ENHANCED SCRATCH RESISTANCE", description: "Adds a layer of scratch resistance, protecting the paint from minor abrasions and swirl marks during regular use." },
        { title: "SELF-CLEANING PROPERTIES", description: "Hydrophobic properties promote self-cleaning; rain or a gentle rinse effectively removes surface contaminants." },
        { title: "TEMPERATURE RESISTANCE", description: "Withstands a wide range of temperatures, providing thermal resistance against heat and protecting from sun damage." },
        { title: "PRESERVATION OF RESALE VALUE", description: "Preserves the aesthetic appeal, contributing to maintaining the resale value of your vehicle." }
    ];

    return (
        <div className="bg-white text-black py-12 px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Image Section */}
                <div className="h-full">
                    <img
                        src="https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_2_v3.jpg"
                        alt="Ceramic Brilliance"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Content Section */}
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-orange-500">
                        SHIELDING YOUR INVESTMENT
                    </h1>
                    <h2 className="text-3xl font-extrabold mt-2">
                        WITH CERAMIC BRILLIANCE
                    </h2>
                    <p className="mt-4 text-lg">
                        Understanding how ceramic coating works is key to appreciating the comprehensive protection it offers for your vehicle. From the molecular level to the surface, Ceramic Coating serves as an impenetrable shield, safeguarding your investment in more ways than one.
                    </p>

                    <div className="mt-6 space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl">⚫</span>
                                <div>
                                    <h3 className="text-lg font-semibold text-orange-500">{feature.title}</h3>
                                    <p className="text-sm text-gray-700">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};




const PreservationSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
           
            {/* Content Column */}
            <div className="bg-white p-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl font-bold text-orange-600">PRESERVING <span className="text-black">PERFECTION</span></h1>
                <p className="mt-4 text-gray-700">
                    While ceramic coating significantly reduces the effort required for maintenance, a few simple steps can ensure your vehicle retains its brilliance for years to come.
                </p>

                <div className="mt-6 space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="text-orange-600 text-xl">⚫</span>
                            <div>
                                <h3 className="text-lg font-bold text-orange-600">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* Image Column */}
             <div className="h-full">
                <img
                    src="https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_2_v3.jpg"
                    alt="Preserving Perfection"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

const features = [
    { title: "REGULAR WASHING", description: "Gentle handwashing or touchless car washes to remove surface contaminants." },
    { title: "MICROFIBER TOWELS FOR DRYING", description: "Use soft, high-quality microfiber towels to reduce the risk of scratches when drying your vehicle." },
    { title: "INSPECT AND REMOVE CONTAMINANTS PROMPTLY", description: "Regularly inspect your vehicle for contaminants and remove them promptly to avoid etching." },
    { title: "USE PH-NEUTRAL CAR SHAMPOO", description: "Opt for pH-neutral shampoos to maintain the coating's hydrophobic properties." },
];



const packages = [
    {
        title: "Factory Car",
        description: "",
        image: "https://via.placeholder.com/100x100",
        content: ""
    },
    {
        title: "Bronze Package",
        description: "Fundamental protection and a glossy finish.",
        image: "https://www.dupageseniorcouncil.org/wp-content/uploads/2018/02/Bronze-Icon-1.jpg",
        content: "The Bronze Package introduces the first layer of Ceramic Coating, providing an initial shield against the elements. This single layer acts as a robust defense, enhancing the durability and gloss of your vehicle's finish."
    },
    {
        title: "Silver Package",
        description: "Extra defense against the elements.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqnTwPTfbc0sVoYr1Uusqfl0KZDmsRkB5pA&s",
        content: "The Silver Package takes protection to the next level with two layers of Ceramic Coating. The additional layer seamlessly complements the first, fortifying your car's exterior against scratches, stains, and environmental contaminants. This dual-layer defense promises heightened resilience and an even more dazzling appearance."
    },
    {
        title: "Gold Package",
        description: "The ultimate shield with an unparalleled shine.",
        image: "https://png.pngtree.com/png-clipart/20230522/ourmid/pngtree-clear-gold-medal-png-image_7104760.png",
        content: "The Gold Package represents the pinnacle of protection with three layers of Ceramic Coating. The third layer forms an impenetrable shield, amplifying the gloss and resistance to an extraordinary level. Your vehicle emerges not just protected but adorned with a triple-layered armor, a testament to the ultimate in Ceramic Coating excellence."
    }
];

const PackageOptions = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">PACKAGE OPTIONS</h1>
                <h2 className="text-3xl font-bold text-orange-600 mt-2">ELEVATE YOUR PROTECTION</h2>
                <p className="mt-4 text-gray-300">
                    Choose your level of defense, and watch as each layer adds a new dimension of brilliance and protection to your vehicle's factory paint.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
                {packages.map((pkg, index) => (
                    <div key={index} className="text-center">
                        <img src={pkg.image} alt={pkg.title} className="mx-auto mb-4 h-24 w-24" />
                        <h3 className="text-xl font-bold">{pkg.title}</h3>
                        {pkg.description && <p className="text-orange-500 font-semibold mt-2">{pkg.description}</p>}
                        <div className="mt-4 text-sm text-gray-300">
                            {pkg.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


