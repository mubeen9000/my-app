import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Contextstore } from './Contextapi';
import { AiFillStar } from 'react-icons/ai';
import Footer from './Footer';
import Foot from './Foot';
import Navbar from './Navbar';
const Casual = () => {
  const { name } = useParams(); // Get category name from URL
  const { products,addtocart } = useContext(Contextstore);

  // Filter products by category name from URL
  const filtered = products.filter(item => item.category.toLowerCase() === name.toLowerCase());

  return (
   
    <div>
      <Navbar/>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='font-bold text-[30px] pl-4 mt-[29px]'>{name.toUpperCase()}</h1>

        <div className='mt-[30px] md:mt-[60px] grid grid-cols-2 md:grid-cols-4 gap-[20px]'>
          {filtered.map((product) => (
            <div key={product.id} className='shadow-lg bg-gray-200 border rounded-[20px] p-4'>
              <img className='w-full h-[200px] object-contain mb-2' src={product.image} alt={product.title} />
              <p className='font-semibold'>{product.title.slice(0, 40)}...</p>
              <p className='text-gray-700'>Price: ${product.price}</p>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-500 text-xl" />
                ))}
                 
              </div>
              <button className='w-full px-3 px py-2 text-[12px] md:w-auto px-10 py-3 bg-black text-white rounded-full mt-[15px]' onClick={() => addtocart(product)}>
            Add cart
          </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Foot />
    </div>
  );
};

export default Casual;
