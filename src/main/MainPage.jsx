import { Outlet } from "react-router-dom";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const MainPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="min-h-screen mt-18">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
