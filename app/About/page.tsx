import { Services, TeamSection,  WhyChooseUs } from '@/components/HeroSlider'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='overflow-hidden'>
     <div className="relative w-full min-h-screen flex flex-col">
          {/* Background Image */}
          <div className="relative w-full h-[80vh]">
            <Image
              src="https://png.pngtree.com/background/20230414/original/pngtree-speeding-racing-car-neon-illustration-background-picture-image_2424792.jpg"
              alt="About-page"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-70" />
            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-6xl font-extrabold drop-shadow-lg">About-us</h1>
              <p className="mt-4 text-2xl drop-shadow-md">We are making cars cool.</p>
            </div>
          </div>
          <Services/>
          </div>
      
      <WhyChooseUs/>
     <TrustedCollaboration/>
      {/* <TeamSection/> */}
      </div>
  )
}

export default page





 function TrustedCollaboration() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-orange-500">TRUSTED</span> <br />
            COLLABORATIONS, <br />
            <span className="text-white">EXCEPTIONAL RESULTS</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Saboo Detailing Studio is an affiliate of Saboo Automotive, renowned as a leader who has sparked a revolution in the Indian supercar industry and laid the foundation for the prestigious Indian Supercar Community. Saboo Automotive is the exclusive India partner for Ceramic Pro, a global nanoceramic coating powerhouse.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            This partnership unlocks a wealth of expertise that goes beyond conventional automotive care. It empowers us to deliver cutting-edge ceramic coating solutions, ensuring that your vehicle receives nothing short of the best-in-class treatment.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <img src="https://ceramicpro.co.in/wp-content/uploads/2021/07/CPINDIA_LOGO.png" alt="Ceramic Pro" className="h-10" />
            {/* <img src="/images/kavaca.png" alt="Kavaca" className="h-10" /> */}
            <div className="text-red-500 font-bold text-xl">SABOO <span className="text-white">RKS</span></div>
          </div>
        </div>

        {/* Right Side - Visual */}
        

        <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <img
            src="https://imgs.search.brave.com/4S_hEg0SL5Csl4Miggor04pohm1FPUhmgmTxiA20FQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzMyLzM5LzQx/LzM2MF9GXzEzMjM5/NDE1MF9xa25Kam43/NG5BdnlTSTNxc2xr/Rm1ZekRqODNPb0Zh/VS5qcGc"
            alt="Molecule"
            className="w-full h-auto object-contain   "
          />
        </div>
      </div>
    </div>
  );
}
