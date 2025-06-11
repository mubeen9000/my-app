import React, { useEffect, useState } from "react";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars_with_reviews.json")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white shadow rounded-xl overflow-hidden border"
        >
          <img
            src={car.imageUrl}
            alt={car.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{car.title}</h2>
            <p className="text-gray-600">{car.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              <p>
                <strong>Fuel:</strong> {car.fuelType}
              </p>
              <p>
                <strong>Seats:</strong> {car.seats}
              </p>
              <p>
                <strong>Doors:</strong> {car.doors}
              </p>
              <p>
                <strong>Price:</strong> {car.pricePerDay}
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {car.rating} ({car.reviews.length}{" "}
                reviews)
              </p>
            </div>

            {/* Reviews Section */}
            <div className="mt-4">
              <h3 className="font-semibold">User Reviews:</h3>
              {car.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="border-t border-gray-200 pt-2 mt-2"
                >
                  <p>
                    <strong>User:</strong> {review.user}
                  </p>
                  <p>
                    <strong>Rating:</strong> {review.rating} ⭐
                  </p>
                  <p>
                    <strong>Comment:</strong> {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
