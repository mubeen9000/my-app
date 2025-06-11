import React, { useContext } from 'react';
import { Contextstore } from './Contextstore';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { products, loading, error } = useContext(Contextstore);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const product = products.slice(15, 19); // show 4 products

  return (
    <div className=''>
      <div className="max-w-[1200px] mx-auto mt-[40px] px-4">
        {/* Header Section */}
        <div className='flex justify-between mb-4'>
          <h1 className='text-[#9eaec6] font-bold'>Popular Car</h1>
          <Link to="/viewall"><button className='text-blue-400'>View All</button></Link>
        </div>

        {/* Scrollable Cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-between rounded-[10px]">
          {product.map((item, index) => (
            <div
              key={item.id || index}
              className="flex-shrink-0 w-full md:w-[22%] h-[310px] shadow-lg bg-white rounded-[10px] border border-black-400"
            >
              <Link to={`/car-details/${item.id || index}`} className="block w-full h-full">
                <div className='flex justify-between ps-5 mt-5'>
                  <h1 className='text-xl'>{item.brand || "Product Title"}</h1>
                  <p><FaHeart className="text-gray-200 text-2xl mr-5" /></p>
                </div>
                <p className='ps-5 text-[#9eaec6]'>{item.model || "Purpose"}</p>

                <img
                  className='w-full h-[140px] object-cover'
                  src={item.imageUrl || "pg1.jpg"}
                  alt={item.title || "Car Image"}
                  loading="lazy"
                />

                <div className='flex justify-between ps-5 mt-5 pe-5'>
                  <h1 className='text-xl'>{item.fuelType || "Petrol"}</h1>
                  <p>{item.transmission || "Manual"}</p>
                  <p>Seat {item.seats || "-"}</p>
                </div>

                <div className='flex justify-between ps-5 pe-5 items-center mt-2'>
                  <p>${item.pricePerDay || "0"} / Day</p>
                 <Link to="/payment">
                  <button className='bg-[#54a6ff] text-white py-2 px-5 rounded-[4px] hover:bg-blue-600'>
                    Rent Now
                  </button>
                 </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
