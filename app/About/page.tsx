import { Services, TeamSection, TestimonialSlider, WhyChooseUs } from '@/components/HeroSlider'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <img src='https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D' className='w-full h-full'/>
      <Services/>
      <WhyChooseUs/>
      <TestimonialSlider/>
      <TeamSection/>
      </div>
  )
}

export default page