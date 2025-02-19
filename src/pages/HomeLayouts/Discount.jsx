import Loader from "../DashboardLayouts/shared/Loader";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DiscountCard from "./DiscountCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Discount = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await axiosPublic.get("/products");
      const isDiscound = res.data.filter(
        (product) => product.have_discount === true
      );
      setLoading(false);
      setProducts(isDiscound);
    };
    loadData();
  }, [axiosPublic]);

  return (
    <>
      <section className="my-20">
        <div
          style={{
            backgroundImage: `url('https://i.ibb.co.com/QFn1NcsX/bg.jpg')`,
          }}
          className="w-full py-10 text-white object-cover bg-center "
        >
          <div className="flex items-center justify-between flex-col md:flex-row px-5">
            <div>
              <h1 className="md:text-4xl text-2xl font-bold uppercase">
                get upto 50% discount
              </h1>
              <p className="text-xl font-bold">for our OTC medicines</p>
            </div>
            <img
              className="md:w-1/3  object-cover"
              src="https://i.ibb.co.com/Z2jwn34/pngegg-3.png"
              alt=""
            />
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-bold pt-10 capitalize">
            discount products
          </h1>
          <div className="my-5">
            {loading ? (
              <Loader></Loader>
            ) : (
              <>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  //   slidesPerView={4}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  navigation
                  //   pagination={{ clickable: true }}
                  //   scrollbar={{ draggable: true }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product._id}>
                      <DiscountCard product={product}></DiscountCard>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
