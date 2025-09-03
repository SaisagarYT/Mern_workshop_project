import React from 'react'
import { useNavigate } from 'react-router-dom'
import siteImage from '../assets/siteImage'

const LandingPageTravelCard = ({ name, destination, duration, price, description, images }) => {
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      navigate('/auth');
    } else {
      // Handle booking logic here
      navigate('/date');
    }
  };
  return (
    <div className='w-72 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100'>
      {/* Image Section */}
      <div className='h-48 relative'>
        <img 
          className='w-full h-full object-cover'
          src={images?.[0] || siteImage.heroImage}
          alt={name}
        />
        {/* Price Tag */}
        <div className='absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full font-medium'>
          ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className='p-4'>
        {/* Location */}
        <div className='flex items-center gap-2 text-gray-600 mb-2'>
          <i className="ri-map-pin-line"></i>
          <span className='text-sm'>{destination}</span>
        </div>

        {/* Title and Duration */}
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
          <span className='text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full'>
            {duration} days
          </span>
        </div>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
          {description}
        </p>

        {/* Book Now Button */}
        <button 
          onClick={handleBookNow}
          className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors'
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default LandingPageTravelCard
