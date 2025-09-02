import React from 'react'
import siteImage from '../assets/siteImage'

const LandingPageTravelCard = () => {
  return (
    <section className='w-60 border border-gray-200 h-full rounded-2xl cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 shadow-xl shadow-gray-200'>
        <div className='w-full h-[70%] p-2 overflow-hidden relative'>
            <img className='h-full object-cover rounded-sm' src={siteImage.heroImage} alt="" />
            <div className='w-30 bg-white rounded-full gap-1 px-2 text-sm absolute flex top-10'>
                <i class="ri-map-pin-line"></i>
                <p>India</p>
            </div>
        </div>
        <div className='w-full px-2 h-[30%] flex flex-col'>
            <h1 className='text-lg font-medium'>Virgin Gorda</h1>
            <p className='text-[10px] text-gray-600'>voluptatem, esse fuga enim est accusamus sunt voluptatibus maxime cum iste rem suscipit totam consectetur! Quia adipisci veritatis cumque blanditiis voluptatibus!</p>
        </div>
    </section>
  )
}

export default LandingPageTravelCard
