import React from 'react'
import {Button,TextField,Select} from '@mui/material'
import siteImage from '../assets/siteImage'
import LandingPageTravelCard from '../reusable_components/LandingPageTravelCard'

const Landingpage = () => {
  return (
    // Hero page
    <section className='w-screen px-20'>
        {/* Navbar */}
      <nav className='w-full h-20 bg-gray-100 flex justify-between px-4'>
        <div className='h-full flex items-center  gap-5 flex-1/4'>
            <span className='flex w-15 h-10 rounded-2xl bg-blue-200'></span>
            <span className='text-2xl font-medium'>Just Trip</span>
        </div>
        <div className='flex-1/2 flex list-none items-center justify-between h-full'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PACKAGES</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </div>
        <div className='flex-1/4 flex items-center h-full justify-end'>
            <Button variant="contained" disableElevation>Book Now</Button>
        </div>
      </nav>
      <div className='w-full bg-gray-200 rounded-4xl h-130 relative'>
        <img className='object-cover w-full h-full object-top rounded-4xl' src={siteImage.heroImage} alt="" />
        {/* dataes and input */}
        <div className='w-full flex h-30 absolute px-5 bg-gray-50 border border-gray-200 -bottom-15 shadow-lg rounded-2xl'>
            <div className='w-200 h-full items-center flex'>
                <TextField
                className='w-full'
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                />
            </div>
            {/* Dates */}
            <div className='w-full h-full justify-around flex'>
                <div className='h-full flex-col items-center justify-center flex'>
                    <label className='text-gray-400 text-sm' htmlFor="">Depature</label>
                    <select name="" id="">
                      <option value="">option-1</option>
                      <option value="">option-2</option>
                      <option value="">option-3</option>
                      <option value="">option-4</option>
                      <option value="">option-5</option>
                    </select>
                </div>
                <div className='h-full flex-col items-center justify-center flex'>
                    <label className='text-gray-400 text-sm' htmlFor="">Return</label>
                    <select name="" id="">
                      <option value="">option-1</option>
                      <option value="">option-2</option>
                      <option value="">option-3</option>
                      <option value="">option-4</option>
                      <option value="">option-5</option>
                    </select>
                </div>
                <div className='h-full flex-col items-center justify-center flex'>
                    <label className='text-gray-400 text-sm' htmlFor="">Cabin class & Travelers</label>
                    <select name="" id="">
                      <option value="">option-1</option>
                      <option value="">option-2</option>
                      <option value="">option-3</option>
                      <option value="">option-4</option>
                      <option value="">option-5</option>
                    </select>
                </div>
                <div className='h-full flex-col items-center justify-center flex'>
                    <label className='text-gray-400 text-sm' htmlFor="">Search</label>
                    <select className='' name="" id="">
                      <option value="">option-1</option>
                      <option value="">option-2</option>
                      <option value="">option-3</option>
                      <option value="">option-4</option>
                      <option value="">option-5</option>
                    </select>
                </div>
            </div>
        </div>
      </div>

      {/* section-2 upcoming events */}

      <section className='w-full h-full mt-15 pt-10'>
        <div className='flex justify-between items-center relative'>
          <h1 className='text-3xl font-medium w-50'>Upcoming Events
            <div className='w-30 h-10 bg-yellow-300 absolute -bottom-6 z-[-1]'>

            </div>
          </h1>
          <p className='text-gray-500 w-70'>Some of the popular destinations to visit to create a beautiful memeories</p>
          <div className='flex gap-2'>
            <span className='w-10 cursor-pointer border border-gray-300 flex h-10 items-center justify-center rounded-full bg-gray-50 shadow-lg'><i class="ri-arrow-left-long-fill"></i></span>
            <span className='w-10 cursor-pointer flex h-10 items-center border border-gray-300 bg-gray-50 justify-center rounded-full shadow-lg'><i className="ri-arrow-right-long-fill"></i></span>
          </div>
        </div>

        {/* booking cards */}

        <div className='w-full flex overflow-x-auto gap-4 h-100 mt-7 p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
          <div className='flex gap-4 min-w-min'>
            {/* cards */}
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
            <LandingPageTravelCard/>
          </div>
        </div>
        
        {/* Top Domains to visit */}
        <section className='w-full mt-4'>
          <div className='flex justify-between items-center relative'>
          <h1 className='text-3xl font-medium w-50'>Top Destinations
            <div className='w-30 h-10 bg-yellow-300 absolute -bottom-6 z-[-1]'>

            </div>
          </h1>
          <p className='text-gray-500 w-70'>Some of the popular destinations to visit to create a beautiful memeories</p>
          <div className='flex gap-2'>
            <span className='w-10 cursor-pointer border border-gray-300 flex h-10 items-center justify-center rounded-full bg-gray-50 shadow-lg'><i class="ri-arrow-left-long-fill"></i></span>
            <span className='w-10 cursor-pointer flex h-10 items-center border border-gray-300 bg-gray-50 justify-center rounded-full shadow-lg'><i className="ri-arrow-right-long-fill"></i></span>
          </div>
        </div>

        <div className='w-full h-100 bg-gray-100 mt-9 flex gap-4 p-4 mb-5'>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.ocean1} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Ocean Paradise</h3>
              <p className='text-white/90 text-sm mb-3'>Experience the stunning beaches and crystal-clear waters</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Goa, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.heroImage} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Mountain Escape</h3>
              <p className='text-white/90 text-sm mb-3'>Discover the beauty of mountain landscapes</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Himachal Pradesh, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.tajMahal} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Taj Mahal</h3>
              <p className='text-white/90 text-sm mb-3'>Visit the iconic symbol of eternal love</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Agra, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.kerela} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Kerala Backwaters</h3>
              <p className='text-white/90 text-sm mb-3'>Experience the serene backwaters and houseboats</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.goldenTemple} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Golden Temple</h3>
              <p className='text-white/90 text-sm mb-3'>Visit the spiritual heart of Sikhism</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Amritsar, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-500 hover:flex-[2.5] overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={siteImage.kashmirHills} alt="" />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0'>
              <h3 className='text-white text-xl font-semibold mb-2'>Kashmir Valley</h3>
              <p className='text-white/90 text-sm mb-3'>Experience the paradise on Earth</p>
              <div className='flex items-center text-white/90 gap-2 text-sm'>
                <i className="ri-map-pin-line"></i>
                <span>Kashmir, India</span>
              </div>
            </div>
          </div>
          <div className='h-full relative flex-1 group transition-all duration-300 hover:flex-[1.5] overflow-hidden'>
            <img className='w-full h-full object-cover' src={siteImage.goa} alt="" />
          </div>
        </div>
        </section>
      </section>

      <section className='w-full h-screen bg-blue-200'>

      </section>
    </section>
  )
}

export default Landingpage
