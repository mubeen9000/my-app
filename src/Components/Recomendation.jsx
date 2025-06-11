import { FaHeart, FaCar } from 'react-icons/fa';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contextstore } from './Contextstore';

const Recomendation = () => {
  const { products, loading, error } = useContext(Contextstore);
  const [visibleCount, setVisibleCount] = useState(8); // Show initial 8 products

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 10); // Load 10 more
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const visibleProducts = products.slice(5, 5 + visibleCount); // Skip first 5 and show more

  return (
    <div className="bg-gray-100 py-5">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[#9eaec6] mt-[15px] font-bold text-2xl">Recommendation</h1>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-[10px]">
          {visibleProducts.map((item, index) => (
            <Link
              to={`/car-details/${item.id || index}`}
              key={item.id || index}
              className="w-full h-[310px] shadow-lg bg-white rounded-[10px] border border-black-400"
            >
              <div className="flex justify-between ps-5 mt-5">
                <h1 className="text-xl">{item.brand || "Product Title"}</h1>
                <FaHeart className="text-gray-200 text-2xl mr-5 cursor-pointer" />
              </div>

              <p className="ps-5 text-[#9eaec6]">{item.type || "Purpose"}</p>

              <img
                className="w-full h-[130px] object-contain"
                src={item.imageUrl || "https://via.placeholder.com/150"}
                alt="Product"
              />

              <div className="flex justify-between ps-5 mt-5 pr-5">
                <h1 className="text-xl">{item.fuelType || "Petrol"}</h1>
                <p>{item.transmission || "Manual"}</p>
                <p>{item.model || "Model"}</p>
              </div>

              <div className="flex justify-between ps-5 items-center pr-5 mt-2">
                <p>{item.pricePerDay ? `$${item.pricePerDay} / Day` : "Price / Day"}</p>
                <Link to="/payment">
                                  <button className='bg-[#54a6ff] text-white py-2 px-5 rounded-[4px] hover:bg-blue-600'>
                                    Rent Now
                                  </button>
                                 </Link>
              </div>
            </Link>
          ))}

          {/* Show More Button */}
          {visibleProducts.length < products.length - 5 && (
            <div className="col-span-full flex justify-center mt-5 mb-5">
              <button
                onClick={handleShowMore}
                className="bg-[#54a6ff] hover:bg-blue-600 flex justify-center text-white py-2 px-5 rounded-[4px] items-center gap-2 transition duration-300"
              >
                <FaCar />
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
