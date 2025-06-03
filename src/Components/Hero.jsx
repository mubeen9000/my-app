import React, { useContext } from 'react';
import { Contextstore } from './Contextapi';



const Hero = () => {
 const context = useContext(Contextstore);
if(!context){
  return <div>Product no found</div>
}
const {products, loading, error,addtocart} =context;

if(loading) return <p>Prodcuts loading....</p>
if(error) return <p>Error: {error}</p>
const firstpro=products.slice(17,18)
  return (
    <div>
      <div className='mx-auto w-full max-w-[1200px] px-4 flex flex-col md:flex-row items-center md:items-center gap-6 mt-[5px]'>
        <div className='w-full md:max-w-[60%] items-center align-center'>
          <h1 className='text-4xl sm:text-6xl font-bold'>
            FIND CLOTHES THAT MATCH YOUR STYLES
          </h1>
          <p className='sm:text-[18px] text-[12px] text-[#8e8d8d] mt-2'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className='w-full sm:w-auto px-10 py-3 bg-black text-white rounded-full mt-[15px]' onClick={() => addtocart(firstpro[0])}>
            Add to cart
          </button>
          <div className='flex flex-wrap justify-between gap-4 text-center mt-[30px]'>
            <div>
              <p className='text-2xl font-bold text-start'>200+</p>
              <p className='text-[#8e8d8d] text-[12px]'>International Brand</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-start'>2,000+</p>
              <p className='text-[#8e8d8d] text-[12px]'>High-Quality-Products</p>
            </div>
            <div className='w-full text-center md:w-auto md:text-start'>
              <p className='text-2xl font-bold'>30,000+</p>
              <p className='text-[#8e8d8d] text-[12px]'>Happy Customer</p>
            </div>
          </div>
        </div>

<div className='w-full md:max-w-[40%] relative mt-10 md:mt-0'>
  {firstpro.map((pro) => (
    <div key={pro.id} className="relative">
      
      <img
        className='w-[40px] md:w-[50px] absolute top-[30%] left-[10%] md:top-[170px] md:left-[30px]'
        src='v.png'
        alt=''
      />

     
      <img
        className="w-full h-auto md:h-[550px] bg-none"
        src={pro.image}
        alt={pro.title}
      />

     
      <img
        className='w-[60px] md:w-[90px] absolute top-[5%] right-[5%] md:top-[60px] md:right-[10px]'
        src="v.png"
        alt=""
      />
    </div>
  ))}
</div>

      </div>
      <div className='w-full h-[80px] ms:[60px] bg-[black] flex flex-wrap text-white justify-around text-[22px] items-center font-bold  z-[2]'>
        <div>VERSACE</div>
        <div>ZARA</div>
        <div>GUCCI</div>
        <div>PRADA</div>
        <div>Calvin Klein

        </div>
      </div>



    </div>
  );
};

export default Hero;
