import React from 'react';
import Footer from './Footer';

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-5">
        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {/* Billing Info */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Enter your name" />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="tel" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Enter your address" />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">City/Town</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Enter your city or town" />
              </div>
            </div>
          </div>

          {/* Pickup Info */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-4">Pickup Information</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Pickup Location</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Enter pickup location" />
              </div>
              <div className="w-full md:w-1/2 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Date</label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="date" />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Time</label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="time" />
                </div>
              </div>
            </div>
          </div>

          {/* Drop-off Info */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-4">Drop-off Information</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Drop-off Location</label>
                <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Enter drop-off location" />
              </div>
              <div className="w-full md:w-1/2 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Date</label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="date" />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Time</label>
                  <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="time" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Payment */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6">
          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p className="text-sm text-gray-600">Details about the selected car and rental duration will appear here.</p>
          </div>

          {/* Payment Info */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4">MasterCard Payment</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Card Number</label>
              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name on Card</label>
              <input className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="text" placeholder="Cardholder Name" />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="month" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-2">CVV</label>
                <input className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400" type="password" maxLength="4" placeholder="•••" />
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Pay Now</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;
