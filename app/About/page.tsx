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
     
      <TeamSection/>
      </div>
  )
}

export default page