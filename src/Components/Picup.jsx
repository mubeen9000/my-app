import React, { useContext } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Contextstore} from './Contextstore';
function Picup() {

const {
  pickupLocation, setPickupLocation,
  pickupDate, setPickupDate,
  pickupTime, setPickupTime,
  dropoffLocation, setDropoffLocation,
  dropoffDate, setDropoffDate,
  dropoffTime, setDropoffTime,
} = useContext(Contextstore);

  return (
    <div className="px-4 mt-[20px]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">

        {/* Pick-Up Left Tab */}
        <div className="w-full lg:w-1/2 rounded-[10px] shadow-lg bg-white p-4">
          <p className="text-2xl flex items-center gap-x-3 mb-4">
            <button className="w-[15px] h-[15px] bg-blue-400 rounded-full"></button>
            Pick-Up
          </p>

          {/* Location, Date, Time in one row always */}
          <div className="flex flex-row items-center gap-4">
            {/* Location */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">LOCATION</label>
              <select value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className="w-full border rounded px-3 py-1 text-sm">
                <option>Gujranwala</option>
                <option>Lahore</option>
                <option>Islamabad</option>
              </select>
            </div>

            {/* Date */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">DATE</label>
              <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)} type="date" className="w-full border rounded px-3 py-1 text-sm" />
            </div>

            {/* Time */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">TIME</label>
              <input value={pickupTime} onChange={(e)=>setPickupTime(e.target.value)} type="time" className="w-full border rounded px-3 py-1 text-sm" />
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="w-[70px] h-[70px] bg-blue-500 text-white rounded-[10px] shadow-lg flex flex-col items-center justify-center text-xl cursor-pointer">
          <FaArrowUp />
          <FaArrowDown />
        </div>

        {/* Drop-Off Right Tab */}
        <div className="w-full lg:w-1/2 rounded-[10px] shadow-lg bg-white p-4">
          <p className="text-2xl flex items-center gap-x-3 mb-4">
            <button className="w-[15px] h-[15px] bg-blue-400 rounded-full"></button>
            Drop-Off
          </p>

          {/* Location, Date, Time in one row always */}
          <div className="flex flex-row items-center gap-4">
            {/* Location */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">LOCATION</label>
              <select value={dropoffLocation} onChange={(e)=>setDropoffLocation(e.target.value)} className="w-full border rounded px-3 py-1 text-sm">
                <option>Gujranwala</option>
                <option>Lahore</option>
                <option>Islamabad</option>
              </select>
            </div>

            {/* Date */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">DATE</label>
              <input value={dropoffDate} onChange={(e)=>setDropoffDate(e.target.value)} type="date" className="w-full border rounded px-3 py-1 text-sm" />
            </div>

            {/* Time */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1 font-bold">TIME</label>
              <input value={dropoffTime} onChange={(e)=>setDropoffTime(e.target.value)} type="time" className="w-full border rounded px-3 py-1 text-sm" />
            </div>
          
          </div>
        </div>

      </div>
    </div>
  );
}

export default Picup;
