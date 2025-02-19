import { Link } from "react-router-dom";

const Promotion = () => {
      return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
                  <Link to="/category/tablet" className="rounded-lg hover:shadow-xl duration-300"><img className='w-full' src="https://i.ibb.co.com/FLCqZDxb/banner-22.png" alt="" /></Link>
                  <Link to="/category/Herbal" className="rounded-lg hover:shadow-xl duration-300"><img className='w-full' src="https://i.ibb.co.com/qK2R29c/banner-23.png" alt="" /></Link>
                  <Link to="/category/Vitamins" className="rounded-lg hover:shadow-xl duration-300"><img className='w-full' src="https://i.ibb.co.com/CKSXgvyV/banner-21.png" alt="" /></Link>
                  <Link to="/category/tablet" className="rounded-lg  hover:shadow-xl duration-300 hidden md:flex lg:hidden"><img className='w-full' src="https://i.ibb.co.com/FLCqZDxb/banner-22.png" alt="" /></Link>
                  
            </div>
      );
};

export default Promotion;