import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
const Foot = () => {
  return (
    <div className='shadow-lg'>
      <div className='max-w-[1320px] mx-auto flex flex-wrap md:flex-nowrap gap-[40px] mt-[50px]'>
        <div className='w-full md:w-[250px]'>
          <h1 className='text-[35px] font-bold  md:text left text-center'>SHOP.CO</h1>
          <p className='text-[14px] text-[#8e8d8d]  md:text left text-center'>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 text-xl text-gray-700 mt-[20px] cursor-pointer justify-center md:text-left">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[20px] md:grid-cols-4'>
          <div className='w-1/2 md:w-[250px] text-center ps-4'>
            <h1 className='text-[20px]'>COMPANY</h1>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Works</a></li>
              <li><a href="">Career</a></li>
            </ul>
          </div>

          <div className='w-1/2 md:w-[250px]  md:text left text-center ps-5'>
            <h1 className='text-[20px]'>HELP</h1>
            <ul>
              <li><a href="">Customer Support</a></li>
              <li><a href="">DeliverDate</a></li>
              <li><a href="">Term Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>

          <div className='w-1/2 md:w-[250px]  md:text left text-center ps-5'>
            <h1 className='text-[20px]'>FAQ</h1>
            <ul>
              <li><a href="">Account</a></li>
              <li><a href="">Manage Delilveries</a></li>
              <li><a href="">Orders</a></li>
              <li><a href="">Payments</a></li>
            </ul>
          </div>

          <div className='w-1/2 md:w-[250px]  md:text left text-center ps-5'>
            <h1 className='text-[20px]'>RESOURCES</h1>
            <ul>
              <li><a href="">Fee e Book</a></li>
              <li><a href="">Development Tutorial</a></li>
              <li><a href="">How to a Blog</a></li>
              <li><a href="">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto border-t border-gray-400 mt-6">
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 mt-4'>
          <p className="text-center ps-[10px] md:text-left">
            Shop.co © 2000-2025, All Rights Reserved by Mubeen Ali Phone Number:  +923010951201
          </p>

          <div className="flex gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              width={40}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              width={40}
            />

            <FaPaypal size={25} color="#003087" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Foot
