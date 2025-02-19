import { Link } from "react-router-dom";

const HandWash = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl font-bold pb-5">
          So good you dont have to scrub your hand.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <Link
            to="/shop-now"
            className=" hover:shadow-xl rounded-3xl duration-300"
          >
            <img
              className="w-full  rounded-3xl"
              src="https://i.ibb.co.com/GrNWkQ6/banner-31.png"
              alt=""
            />
          </Link>
          <Link
            to="/shop-now"
            className="hover:shadow-xl rounded-3xl duration-300"
          >
            <img
              className="w-full rounded-3xl"
              src="https://i.ibb.co.com/twP117nZ/banner-32.png"
              alt=""
            />
          </Link>
          <Link
            to="/shop-now"
            className=" hover:shadow-xl rounded-3xl duration-300"
          >
            <img
              className="w-full rounded-3xl"
              src="https://i.ibb.co.com/zhsk4Gvj/banner-33.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HandWash;
