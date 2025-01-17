import Banner from "../../Components/banner/Banner";
import Categories from "./Categories";
import Discount from "./Discount";

const HomaPage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="max-w-screen-2xl mx-auto px-5">
      <Categories></Categories>
      <Discount></Discount>
      </section>
    </>
  );
};

export default HomaPage;
