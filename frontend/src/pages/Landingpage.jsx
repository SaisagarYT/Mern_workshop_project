import React from 'react'
import {Button,TextField,Select} from '@mui/material'
import siteImage from '../assets/siteImage'

const Landingpage = () => {
  return (
    // Hero page
    <section className='w-screen h-screen px-20'>
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
    </section>
  )
}

export default Landingpage
