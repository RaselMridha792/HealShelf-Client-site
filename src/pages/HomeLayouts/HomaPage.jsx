import { Helmet } from "react-helmet";
import Banner from "../../Components/banner/Banner";
import Categories from "./Categories";
import FeaturedBrands from "./FeaturedBrands";
import ShopByHealth from "./ShopByHealth";
import Deals from "./Deals";
import Benifit from "./Benifit";
import Promotion from "./Promotion";
import FindUs from "./FindUs";
import HandWash from "./HandWash";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const HomaPage = () => {
    const {changeColor } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>Heal shelf | Home</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
      <Banner></Banner>
      <section className={`max-w-screen-2xl mx-auto px-5 ${changeColor?'text-black':'text-white'}`}>
        <Promotion></Promotion>
        <Categories></Categories>
        <FeaturedBrands></FeaturedBrands>
        <Deals></Deals>
        <ShopByHealth></ShopByHealth>
        <HandWash></HandWash>
        <FindUs></FindUs>
        <Benifit></Benifit>
      </section>
    </>
  );
};

export default HomaPage;
