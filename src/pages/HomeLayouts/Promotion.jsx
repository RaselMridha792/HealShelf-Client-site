import React from 'react';

const Promotion = () => {
      return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
                  <div className="rounded-lg"><img className='w-full' src="https://i.ibb.co.com/FLCqZDxb/banner-22.png" alt="" /></div>
                  <div className="rounded-lg"><img className='w-full' src="https://i.ibb.co.com/qK2R29c/banner-23.png" alt="" /></div>
                  <div className="rounded-lg"><img className='w-full' src="https://i.ibb.co.com/CKSXgvyV/banner-21.png" alt="" /></div>
                  <div className="rounded-lg hidden md:flex lg:hidden"><img className='w-full' src="https://i.ibb.co.com/FLCqZDxb/banner-22.png" alt="" /></div>
                  
            </div>
      );
};

export default Promotion;