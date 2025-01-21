import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerCart from "./BannerCart";
const Banner = () => {
  return (
    <>
      <section className="mt-12">
        <header>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            autoplay={true}
              slidesPerView={1}
            navigation
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
          >
            {/* {products.map((product) => (
                    <SwiperSlide key={product._id}>
                      <DiscountCard product={product}></DiscountCard>
                    </SwiperSlide>
                  ))} */}
            <SwiperSlide>
              <BannerCart></BannerCart>
            </SwiperSlide>
            <SwiperSlide>
              <BannerCart></BannerCart>
            </SwiperSlide>
          </Swiper>
        </header>
      </section>
    </>
  );
};

export default Banner;
