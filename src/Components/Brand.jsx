import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Contextstore } from './Contextapi';
import { Link } from 'react-router-dom';
const Topselling = () => {
  const { products, loading, error } = useContext(Contextstore);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const firstfour = products.slice(0, 4);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="md:text-5xl text-4xl font-bold text-center mt-[70px]">TOP SELLINGS</h1>

   
        <div className="flex overflow-x-auto md:flex-wrap md:justify-between gap-4 mt-[70px]">

          {firstfour.map((items) => (
            <Link
              to={`/shoppage/${items.id}`}
              key={items.id}
              className="min-w-[70%] md:min-w-[23%] shadow-lg rounded-[20px] p-3 text-center shrink-0"
            >
              <img src={items.image} alt={items.title} className="w-full h-[150px] object-contain" />
              <p className="text-[13px] mt-[10px]">{items.title}</p>

              <div className="flex justify-center space-x-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-500 text-xl" />
                ))}
              </div>
              <p className="font-bold mt-1">${items.price}</p>


              <button className='w-full sm:w-auto px-10 py-3 bg-black text-white rounded-full mt-[15px]'>
                Shop Now
              </button>
            </Link>
          ))}

        </div>

       <div className="flex justify-center items-center w-full">
   
</div>



      </div>

    </div>
  );
};

export default Topselling;
