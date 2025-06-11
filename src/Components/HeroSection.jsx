import React, { useContext } from 'react';
import {Contextstore} from './Contextstore';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const { products, loading, error } = useContext(Contextstore);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

    const product= products.slice(0,2)

  return (
    
    <div className='mt-[10px]'>
      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-[30px] '>
        <div className='w-full md:w-[49%] h-[300px] bg-[#3563e9] rounded-[7px]'>
          <h1 className='text-white text-3xl  font-bold ps-5 mt-[16px]'>The Best Platform <br /> for Car Rental</h1>
          <p className='text-white text-[16px] ps-5 mt-[16px]'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <Link to='/payment'>
          <button className='bg-[#54a6ff] text-white py-2 px-5 mt-[15px] ml-[20px] rounded-[4px] flex justify-center items-center'>
            RentalCar
          </button>
          </Link>
          {product[0]?.imageUrl && (
          <img className='flex justify-center items-center mt-[13px]  md:ml-[170px] md:mt-[-10px] w-[300px] h-[90px]  ' src="img.png" alt="" />
          )}
        </div>
        <div className='hidden  md:block w-[49%]  h-[300px] bg-[#54a6ff] rounded-[7px]'>
          <h1 className='text-white text-3xl font-bold ps-5 mt-[16px]'>The Best Platform <br /> for Car Rental</h1>
          <p className='text-white text-[16px] ps-5 mt-[16px]'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <Link to="/payment"><button className='bg-[#3563e9] text-white py-2 px-5 mt-[15px] ml-[20px] rounded-[4px] flex justify-center items-center'>
            RentalCar
          </button></Link>
          {product[1]?.imageUrl && (
          <img className='flex justify-center items-center mt-[13px] md:ml-[170px] md:mt-[-10px] w-[300px] h-[90px]  ' src="img.png" alt="" />
          )}
        </div>

      </div>
    </div>
  )
}
export default HeroSection;
