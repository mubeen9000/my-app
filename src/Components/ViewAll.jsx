import React, { useContext } from 'react';
import Footer from './Footer';
import Picup from './Picup';
import { Link } from 'react-router-dom';

import { FaHeart, FaCar } from 'react-icons/fa';
import { Contextstore } from './Contextstore';

const ViewAll = () => {
  const { products, loading, error } = useContext(Contextstore);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const pro = products.slice(25, 34); // 9 items

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-4 p-4">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/4 shadow-lg bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Filter by Brand</h2>
          <div className="space-y-4">
            {['Hyundai', 'BMW', 'Toyota', 'Honda', 'Kia'].map((brand, index) => (
              <label key={index} className="flex items-center gap-2 text-lg">
                <input type="checkbox" />
                {brand}
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-6">Capacity</h2>
          <div className="space-y-4">
            {['2 Person', '4 Person', '6 Person', '8 or More'].map((capacity, index) => (
              <label key={index} className="flex items-center gap-2 text-lg">
                <input type="checkbox" />
                {capacity}
              </label>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4 rounded-md">
          <Picup />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {pro.map((item) => (
  <Link
    to={`/car-details/${item.id}`}
    key={item.id}
    className="h-[340px] w-full shadow-lg bg-white rounded-[10px] border border-gray-200 block"
  >
    <div className='flex justify-between ps-5 mt-5'>
      <h1 className='text-xl font-semibold'>{item.brand || "Product Title"}</h1>
      <p><FaHeart className="text-gray-300 text-2xl mr-5 cursor-pointer hover:text-red-400 transition" /></p>
    </div>
    <p className='ps-5 text-[#9eaec6]'>{item.model || "Model Name"}</p>
    <img
      className='w-full h-[140px] object-contain'
      src={item.imageUrl || "https://via.placeholder.com/150"}
      alt={item.model || "Car Image"}
    />
    <div className='flex justify-between ps-5 mt-4 text-sm'>
      <p>{item.fuelType || "Fuel"}</p>
      <p>{item.transmission || "Transmission"}</p>
      <p className='mr-5'>Seat {item.seats || "N/A"}</p>
    </div>
    <div className='flex justify-between ps-5 items-center mt-4'>
      <p className="text-blue-600 font-bold">${item.pricePerDay || "0"} / Day</p>
      <Link to="/payment">
                        <button className='bg-[#54a6ff] text-white py-2 px-5 rounded-[4px] hover:bg-blue-600'>
                          Rent Now
                        </button>
                       </Link>
    </div>
  </Link>
))}



          </div>
          <div className="col-span-full flex justify-center mt-5 mb-5">
            <button className="bg-[#54a6ff] hover:bg-[#3e95e4] flex justify-center text-white py-2 px-5 rounded-[4px] items-center gap-2 transition duration-300">
              <FaCar />
              Show more
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAll;
