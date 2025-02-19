const Benifit = () => {
      return (
            <>
            <div className='mb-10'>
                  <h1 className='text-2xl font-bold capitalize'>Benefit we provide you</h1>
                  <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='flex items-center gap-2 md:border-r-4 md:border-cyan-500'>
                              <img className='w-20' src="https://img.icons8.com/?size=100&id=EYvpmT5B8qg0&format=png&color=000000" alt="" />
                              <div>
                                    <h1 className='font-bold'>Free Shipping</h1>
                                    <p>on order over $40</p>
                              </div>
                        </div>
                        <div className='flex items-center gap-2 md:border-r-4 md:border-cyan-500'>
                              <img className='w-20' src="https://img.icons8.com/?size=100&id=Vz98zzpsfaUi&format=png&color=000000" alt="" />
                              <div>
                                    <h1 className='font-bold'>Free Treat</h1>
                                    <p>Included With Every Order</p>
                              </div>
                        </div>
                        <div className='flex items-center gap-2 md:border-r-4 md:border-cyan-500'>
                              <img className='w-20' src="https://img.icons8.com/?size=100&id=YxJ9bQ7zDEcH&format=png&color=000000" alt="" />
                              <div>
                                    <h1 className='font-bold'>Shopping With Confidence</h1>
                                    <p>100% secure payment</p>
                              </div>
                        </div>
                        <div className='flex items-center gap-2  md:border-r-4 md:border-cyan-500 lg:border-none'>
                              <img className='w-20' src="https://img.icons8.com/?size=100&id=qx4O95lfRoD1&format=png&color=000000" alt="" />
                              <div>
                                    <h1 className='font-bold'>Store Locator</h1>
                                    <p>Find your local store</p>
                              </div>
                        </div>
                        
                  </div>
            </div>
                  
            </>
      );
};

export default Benifit;