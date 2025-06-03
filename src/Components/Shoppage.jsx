import React, { useContext } from 'react'
import Mightlike from './Mightlike';
import Footer from './Footer';
import Foot from './Foot';
import { AiFillStar } from 'react-icons/ai';
import { Contextstore } from './Contextapi';
import Review from './Review';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
const Shoppage = () => {
  const { id } = useParams();
  const { products, loading, error, addtocart } = useContext(Contextstore);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  const pro = products.find(product => product.id === parseInt(id));

  if (!pro) return <p>Product not found.</p>;

  return (
    <div>
      <Navbar/>
      <div className='max-w-[1200px] mx-auto mt-[40px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='md:w-[480px] md:h-[450px] shadow-lg rounded-[20px] border border-black-300 flex justify-center items-center'>
            <img className='md:w-[400px] md:h-[350px] w-[230px] h-[250px]' src={pro.image} alt={pro.title} />
          </div>

          <div className='text-[15px] ps-4 mt-[10px] md:text-[30px]'>
            <h1 className='font-bold text-[22px] md:text-[30px]'>{pro.title} | {pro.category}</h1>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} className="text-yellow-500 text-xl" />
              ))}
            </div>
            <h1>${pro.price}</h1>
            <p className='text-[#8e8d8d] text-[18px]'>{pro.description}</p>
            <button className='w-full sm:w-auto px-10 py-3 bg-black text-[18px] text-white rounded-full mt-[30px]' onClick={() => addtocart(pro)}>
             Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Review />
      <Mightlike />
      <br />
      <Footer />
      <Foot />
    </div>
  );
};
export default Shoppage;