import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerCart from "./BannerCart";
import useBannerData from "../../hooks/useBannerData";
import Loader from "../../pages/DashboardLayouts/shared/Loader";
const Banner = () => {
  const [data, isLoading] = useBannerData();
  return (
    <>
      <section className="mt-12">
        <header>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            autoplay={true}
            slidesPerView={1}
            navigation
          >
            {isLoading ? (
              <>
                <Loader></Loader>
              </>
            ) : (
              data?.map((singleData) => (
                <SwiperSlide key={singleData.map}>
                  <BannerCart heading={singleData.heading} subHeading={singleData.subheading} image={singleData.image}></BannerCart>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </header>
      </section>
    </>
  );
};

export default Banner;
