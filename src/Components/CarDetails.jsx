import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaCar } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Contextstore } from './Contextstore';

const CarDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useContext(Contextstore);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error.message}</p>;

  const car = products.find((p) => p.id?.toString() === id);
  const recommendations = products.slice(34, 40); // or any logic you prefer

  if (!car) return <p className="text-center text-red-500 mt-10">Car not found.</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-1/4 shadow-lg bg-white p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Filter by Brand</h2>
            {['Hyundai', 'BMW', 'Toyota', 'Honda', 'Kia'].map((brand, i) => (
              <label key={i} className="flex items-center gap-2 text-lg">
                <input type="checkbox" />
                {brand}
              </label>
            ))}
            <h2 className="text-xl font-semibold mt-6 mb-4">Capacity</h2>
            {['2 Person', '4 Person', '6 Person', '8 or More'].map((cap, i) => (
              <label key={i} className="flex items-center gap-2 text-lg">
                <input type="checkbox" />
                {cap}
              </label>
            ))}
          </aside>

          {/* Main */}
          <main className="w-full md:w-3/4 p-4 rounded-md">
            {/* Car Info */}
            <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6">
              <div className="w-full md:w-1/2 bg-white p-4 rounded-md shadow">
                <h1 className="text-2xl font-bold">{car.brand} - {car.model}</h1>
                <p className="text-[14px] mt-3">{car.description22 || 'Futuristic and elegant sports car.'}</p>
                <img
                  src={car.imageUrl}
                  alt={car.model}
                  className="w-[250px] h-[150px] object-contain mt-5 mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2 bg-white p-4 rounded-md shadow">
                <p>{car.description}</p>
                <p><strong>Fuel:</strong> {car.fuelType}</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>
                <p><strong>Seats:</strong> {car.seats}</p>
                <p className="mt-3"><strong>Price/Day:</strong> ${car.pricePerDay}</p>
                <div className="mt-5 flex justify-end">
                 <Link to="/payment">
                  <button className='bg-[#54a6ff] text-white py-2 px-5 rounded-[4px] hover:bg-blue-600'>
                    Rent Now
                  </button>
                 </Link>
                </div>
              </div>
            </div>

            {/* Reviews */}
            {/* Reviews */}
            <div className="shadow-lg bg-white rounded-md p-5 mb-8">
              <h2 className="text-xl font-bold mb-3">Customer Reviews</h2>
              {car.reviews && car.reviews.length > 0 ? (
                car.reviews.map((review, i) => (
                  <div key={i} className="mb-5 border-b pb-3">
                    <div className="flex justify-between">
                      <p><strong>{review.user}</strong></p>
                      <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                    </div>
                    <p className="text-sm text-gray-600">{review.date}</p>
                    <p className="text-[14px] mt-1">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews for this car yet.</p>
              )}
              <div className="flex justify-center">
                <button className="bg-[#54a6ff] text-white py-2 px-5 rounded hover:bg-blue-600">
                  Show All
                </button>
              </div>
            </div>
            {/* Recommendations */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended Cars</h2>
              <a href="#" className="text-blue-600 text-sm">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow border">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.brand}</h3>
                    <FaHeart className="text-gray-300 text-xl cursor-pointer" />
                  </div>
                  <p className="text-sm text-gray-500">{item.model}</p>
                  <img
                    src={item.imageUrl}
                    alt={item.model}
                    className="w-full h-[130px] object-contain my-3"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{item.fuelType}</span>
                    <span>{item.transmission}</span>
                    <span>Seat: {item.seats}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-blue-600 font-bold">${item.pricePerDay} / Day</p>
                    <button className="bg-[#54a6ff] text-white py-1 px-3 rounded hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-[#54a6ff] text-white py-2 px-5 rounded hover:bg-blue-600 flex items-center gap-2">
                <FaCar />
                Show More
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
