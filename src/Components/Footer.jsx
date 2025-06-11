import React from 'react'

const Footer = () => {
  return (
    <div className='px-4'>
      <div className='max-w-[1200px] mx-auto md:bg-white mt-[50px] rounded-[10px] md:shadow-lg p-6 flex flex-col md:flex-row gap-10'>
        
        {/* Left Section */}
        <div className='md:w-[55%]'>
          <h1 className='text-2xl text-blue-500 font-bold'>MORENT</h1>
          <p className='mt-5 text-gray-600'>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        {/* Right Section */}
        <div className='md:w-[45%] flex flex-col sm:flex-row gap-6 md:gap-[40px]'>
          <div>
            <h1 className='text-xl font-bold mb-2'>About</h1>
            <a href="" className='block text-gray-600'>How it works</a>
            <a href="" className='block text-gray-600'>Features</a>
            <a href="" className='block text-gray-600'>Partnership</a>
            <a href="" className='block text-gray-600'>Business Relation</a>
          </div>
          <div>
            <h1 className='text-xl font-bold mb-2'>Community</h1>
            <a href="" className='block text-gray-600'>Events</a>
            <a href="" className='block text-gray-600'>Blog</a>
            <a href="" className='block text-gray-600'>Invite a friend</a>
            <a href="" className='block text-gray-600'>Forums</a>
          </div>
          <div>
            <h1 className='text-xl font-bold mb-2'>Social</h1>
            <a href="" className='block text-gray-600'>Facebook</a>
            <a href="" className='block text-gray-600'>Twitter</a>
            <a href="" className='block text-gray-600'>LinkedIn</a>
            <a href="" className='block text-gray-600'>Instagram</a>
          </div>
        </div>
      </div>

      {/* Horizontal Line and Contact - Placed outside flex */}
      <hr className="my-6 border-t-2 border-gray-300 max-w-[1200px] mx-auto" />
      <div className="text-center text-sm text-gray-500 mb-6">
        <h1>©2025 All rights reserved. Mubeen Ali +923010951201</h1>
      </div>
    </div>
  )
}

export default Footer
