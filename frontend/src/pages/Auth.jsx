import React, { useState } from 'react'
import { TextField, Checkbox, FormControlLabel } from '@mui/material'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
  }

  return (
    <div className='min-h-screen flex'>
      {/* Left Side - Form */}
      <div className='flex-1 flex items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8'>
          {/* Profile Icon */}
          <div className='flex justify-center'>
            <div className='w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold'>
              G
            </div>
          </div>

          {/* Title and Description */}
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900'>Sign in to your account</h2>
            <p className='mt-2 text-sm text-gray-600'>
              Start planning your dream vacation - explore amazing destinations and create unforgettable memories!
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex items-center justify-between'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <a href="#" className='text-sm text-blue-600 hover:text-blue-500'>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className='w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className='text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <a href="#" className='font-medium text-blue-600 hover:text-blue-500'>
              Sign up now, it's free!
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Background Image with Content */}
      <div className='hidden lg:flex flex-1 relative bg-blue-700'>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-12'>
          <div className='max-w-md space-y-8'>
            {/* Logo Icons Grid */}
            <div className='grid grid-cols-3 gap-8'>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-plane-line text-3xl"></i>
              </div>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-hotel-line text-3xl"></i>
              </div>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-map-pin-line text-3xl"></i>
              </div>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-compass-3-line text-3xl"></i>
              </div>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-earth-line text-3xl"></i>
              </div>
              <div className='bg-white/10 p-4 rounded-xl'>
                <i className="ri-suitcase-line text-3xl"></i>
              </div>
            </div>

            {/* Website Name */}
            <h1 className='text-2xl font-bold'>JUST TRIP</h1>

            {/* Description */}
            <p className='text-xl leading-relaxed'>
              Your journey begins here – Discover amazing destinations, find the best deals, 
              and create memories that last a lifetime with Just Trip, your trusted travel companion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
