import brands1 from "../../assets/brands/brand-21.png";
import brands2 from "../../assets/brands/brand-22.png";
import brands3 from "../../assets/brands/brand-24.png";
import brands4 from "../../assets/brands/brand-25.png";
import brands5 from "../../assets/brands/brand-26.png";
import brands6 from "../../assets/brands/medical.png";
const FeaturedBrands = () => {
  return (
    <>
      <section className="my-20">
        <h1 className="text-2xl font-bold py-5">Featured Brands</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5">
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands1} alt="" />
            </div>
            <p className="text-center font-bold pt-2">phara</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands2} alt="" />
            </div>
            <p className="text-center font-bold  pt-2">zetice</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands3} alt="" />
            </div>
            <p className="text-center font-bold  pt-2">insule</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands6} alt="" />
            </div>
            <p className="text-center font-bold  pt-2">medical</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands5} alt="" />
            </div>
            <p className="text-center font-bold  pt-2">painix</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full">
              <img className="hover:scale-105 duration-500" src={brands4} alt="" />
            </div>
            <p className="text-center font-bold  pt-2">stethoscope</p>
            <p className="px-2 py-1 bg-cyan-600 text-white">25% sale off</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBrands;
