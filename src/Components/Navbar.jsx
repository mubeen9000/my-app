import React, { useContext, useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Contextstore } from './Contextapi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { search, setSearch, cartitems } = useContext(Contextstore);

  return (
    <nav className="bg-white mx-auto max-w-[1200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left side: Logo + Home */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-4xl font-bold text-black">SHOP.CO</a>
            {/* <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contac Us</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a> */}
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Right: Cart and User icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-700 hover:text-indigo-600 cursor-pointer" />
              {cartitems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartitems.length}
                </span>
              )}
            </Link>
            <Link to="/Login" className="relative">
            <FiUser className="text-2xl text-gray-700 hover:text-indigo-600 cursor-pointer" />
            </Link>
          </div>


          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          <div className="flex space-x-4 pt-2">
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-700 hover:text-indigo-600 cursor-pointer" />
              {cartitems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartitems.length}
                </span>
              )}
            </Link>
             <Link to="/Login" className="relative">
              <FiUser className="text-2xl text-gray-700 hover:text-indigo-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
