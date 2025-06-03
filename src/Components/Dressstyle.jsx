import React, { useContext, useState } from 'react'
import { Contextstore } from './Contextapi';
import { Link } from 'react-router-dom';
function Dressstyle() {

    const { products, loading, error } = useContext(Contextstore);

    if (loading) return <p>Loading..</p>
    if (error) return <p>Error: {error}</p>

    const imge4 = products.slice(1,5)

    return (
        <div className='mt-[80px]'>
            <div className='flex flex-col mx-auto w-full max-w-[1200px]  py-10'>
                <h1 className='md:text-5xl text-4xl text-center font-bold mb-10'>BROWSE BY DRESS STYLE</h1>

                <div className='flex flex-col md:flex-row items-center justify-around gap-4 mt-[40px]'>
<Link to="/category/men's clothing">
                    <div className='w-[300px] h-[200px] mx-auto rounded-[20px] border-black-300 shadow-lg p-4'>
                        <p className='text-[30px] font-bold ps-5'>{imge4[0]?.category}</p>
                        <img className="w-[200px] h-[120px] ml-[105px] mt-[5px] object-contain" src={imge4[0]?.image} alt={imge4[0]?.title} />
                    </div>
</Link>
<Link to="/category/electronics">
                    <div className='w-[300px] h-[200px] mx-auto rounded-[20px] border-black-300 shadow-lg p-4'>
                        <p className='text-[30px] font-bold ps-5'>{imge4[1]?.category}</p>
                        <img className="w-[200px] h-[120px] ml-[105px] mt-[5px] object-contain" src={imge4[1]?.image} alt={imge4[1]?.title} />
                    </div>
</Link>
                    
                </div>

                <div className='flex flex-col md:flex-row items-center justify-around gap-4 mt-[40px] '>

                     <Link to="/category/women's clothing">
                    <div className='w-[300px] h-[200px] mx-auto rounded-[20px] border-black-300 shadow-lg p-4'>
                        <p className='text-[30px] font-bold ps-5'>{imge4[2]?.category}</p>
                        <img className="w-[200px] h-[120px] ml-[105px] mt-[5px] object-contain" src={imge4[2]?.image} alt={imge4[2]?.title} />
                    </div>
</Link>

                   <Link to="/category/jewelery">
                    <div className='w-[300px] h-[200px] mx-auto rounded-[20px] border-black-300 shadow-lg p-4'>
                        <p className='text-[30px] font-bold ps-5'>{imge4[3]?.category}</p>
                        <img className="w-[200px] h-[120px] ml-[105px] mt-[5px] object-contain" src={imge4[3]?.image} alt={imge4[3]?.title} />
                    </div>
</Link>
                </div>
            </div>
        </div>
    )
}

export default Dressstyle
