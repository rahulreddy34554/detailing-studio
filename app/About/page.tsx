import { Services, TeamSection, TestimonialSlider, WhyChooseUs } from '@/components/HeroSlider'
import React from 'react'

const page = () => {
  return (
    <div className='text-white'>
      <Services/>
      <WhyChooseUs/>
      <TestimonialSlider/>
      <TeamSection/>
    </div>
  )
}

export default page