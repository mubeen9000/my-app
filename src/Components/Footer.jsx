import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='w-full max-w-[1200px] mx-auto h-[380px] md:h-[140px] bg-black rounded-[10px] mt-[30px] flex flex-col md:flex-row items-center justify-evenly'>

                <div className='md:order-1 order-1 w-full md:w-auto px-4 text-center md:text-left'>
                    <h1 className='text-white font-bold text-[35px] sm:text-[45px] w-full md:w-auto break-offers'>
                        STAY UPTODATE ABOUT OUR LATEST OFFERS
                    </h1>

                </div>

                <div className='md:order-2 order-2 mt-4 md:mt-0 w-full md:w-auto px-4 flex flex-col items-center md:items-end'>
                    <input
                        className="rounded-full py-3 px-5 w-full md:w-auto"
                        type="text"
                        placeholder='Enter your email'
                    />
                    <div className='bg-white py-3 px-5 rounded-full cursor-pointer mt-3 text-center w-full md:w-auto'>
                        Subscribe Now to Update
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
