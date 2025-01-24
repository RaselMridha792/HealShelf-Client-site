const BannerCart = ({heading, subHeading, image}) => {
  return (
    <>
      <div className="bg-cyan-300 py-20">
        <div className="flex items-center justify-between md:gap-10 gap-5 max-w-screen-2xl mx-auto px-5">
          <div className="lg:flex-grow w-1/2">
            <h1 className="md:text-4xl text-2xl font-bold pb-5">{heading}</h1>
            <p className="text-lg pb-3">{subHeading}</p>
            <button className="btn btn-neutral">Learn More</button>
          </div>
          <div className="lg:flex-1 w-1/2">
            <img className="md:h-96 h-52 object-cover rounded-xl shadow-lg" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCart;
