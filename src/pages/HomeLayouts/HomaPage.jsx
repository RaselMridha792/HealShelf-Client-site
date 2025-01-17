import Banner from "../../Components/banner/Banner";
import Categories from "./Categories";
import Discount from "./Discount";
import FeaturedBrands from "./FeaturedBrands";
import ShopByHealth from "./ShopByHealth";

const HomaPage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="max-w-screen-2xl mx-auto px-5">
      <Categories></Categories>
      <Discount></Discount>
      <FeaturedBrands></FeaturedBrands>
      <ShopByHealth></ShopByHealth>
      </section>
    </>
  );
};

export default HomaPage;
