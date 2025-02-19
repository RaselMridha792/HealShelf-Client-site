import { Link } from "react-router-dom";

const BannerCart = ({ heading, subHeading, image }) => {
  return (
    <>
      <div className="relative w-full">
        <video
          className="w-full md:h-[800px] h-[500px] object-cover"
          autoPlay
          loop
          muted
          src="https://cdn.pixabay.com/video/2019/09/19/27019-361107952_large.mp4"
        ></video>
        <div className="absolute top-0 left-0 w-full bg-black h-full py-40 bg-opacity-30">
          <div className="flex items-center justify-between md:gap-10 gap-5 max-w-screen-2xl mx-auto px-5">
            <div className="lg:flex-grow text-white w-1/2">
              <h1 className="md:text-4xl text-2xl font-bold pb-5">{heading}</h1>
              <p className="text-lg pb-3">{subHeading}</p>
              <Link to="/shop-now" className="btn btn-neutral">
                Learn More
              </Link>
            </div>
            <div className="lg:flex-1 w-1/2">
              <img
                className="md:h-96 h-52 object-cover rounded-xl shadow-lg"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCart;
