import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const reviews = [
  {
    name: 'Sara',
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: 'Ali',
    text: "Shop.co is my new favorite! Excellent service and amazing collection. Highly recommend to anyone who loves fashion!"
  },
  {
    name: 'Ayesha',
    text: "Great quality products and fast delivery. Customer support was also very helpful and responsive."
  },
  {
    name: 'Ahmed',
    text: "I love how stylish and affordable everything is. This store never disappoints!"
  },
   {
    name: 'Sara',
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: 'Ali',
    text: "Shop.co is my new favorite! Excellent service and amazing collection. Highly recommend to anyone who loves fashion!"
  }
];

const Review = () => {
  return (
    <div>
      <div className='max-w-[1320px] mx-auto px-4'>
        <h1 className='font-bold text-[33px] py-5'>OUR HAPPY CUSTOMERS</h1>

        {/* Mobile Slider */}
        <div className='block md:hidden'>
          <Swiper spaceBetween={20} slidesPerView={1}>
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-[220px] shadow-lg rounded-[20px] border p-4'>
                  <div className='flex space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} className='text-yellow-500 text-xl mt-1' />
                    ))}
                  </div>
                  <p className='text-[20px] font-bold mt-2'>{review.name}</p>
                  <p className='text-[14px]'>{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className='hidden md:grid grid-cols-2 w-full gap-[20px]'>
          {reviews.map((review, index) => (
            <div key={index} className='w-[600px] h-[190px] shadow-lg rounded-[20px] border p-4'>
              <div className='flex space-x-1'>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className='text-yellow-500 text-xl mt-1' />
                ))}
              </div>
              <p className='text-[20px] font-bold mt-2'>{review.name}</p>
              <p className='text-[14px]'>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
