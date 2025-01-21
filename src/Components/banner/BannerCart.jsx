const BannerCart = ({heading, subHeading, image}) => {
  return (
    <>
      <div className="bg-cyan-300 py-20">
        <div className="flex items-center justify-between md:gap-10 gap-5 max-w-screen-2xl mx-auto px-5">
          <div className="lg:flex-grow w-1/2">
            <h1 className="md:text-4xl text-2xl font-bold pb-5">Buy Big - Get Small Sale 35% Off</h1>
            <p className="text-lg pb-3">We Commit to care your skins</p>
            <button className="btn btn-neutral">Learn More</button>
          </div>
          <div className="lg:flex-1 w-1/2">
            <img className="" src="https://i.ibb.co.com/Ntsb8tH/pngegg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCart;
