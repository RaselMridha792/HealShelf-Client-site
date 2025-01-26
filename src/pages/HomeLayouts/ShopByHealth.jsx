import { Link } from "react-router-dom";
import depression from "../../assets/brands/cat-21.jpg";
import depression2 from "../../assets/brands/cat-22.jpg";
import depression3 from "../../assets/brands/cat-23.jpg";
import depression4 from "../../assets/brands/cat-24.jpg";
const ShopByHealth = () => {
  return (
    <>
      <section className="my-20">
        <h1 className="text-2xl font-bold py-5">Shop By Health Concerns</h1>
        <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1">
          <Link to="/category/tablet" className="border relative hover:shadow-lg duration-300">
            <img className="w-full h-52 object-cover" src={depression} alt="" />
            <p className="absolute top-5 left-5">Depression</p>
          </Link>
          <Link to="/category/Vitamins"  className="border relative hover:shadow-lg duration-300">
            <img className="w-full h-52 object-cover" src={depression2} alt="" />
            <p className="absolute top-5 left-5">Hair loss</p>
          </Link>
          <Link to="/category/Personal%20Care"  className="border relative hover:shadow-lg duration-300">
            <img className="w-full h-52 object-cover" src={depression3} alt="" />
            <p className="absolute top-5 left-5">personal health care</p>
          </Link>
          <Link to="/category/Herbal"  className="border relative hover:shadow-lg duration-300">
            <img className="w-full h-52 object-cover" src={depression4} alt="" />
            <p className="absolute top-5 left-5">Stomach Pain Herbal</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ShopByHealth;
