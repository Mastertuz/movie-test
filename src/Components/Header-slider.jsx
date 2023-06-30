import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";


const HeaderSlider = () => {
  
  return (
    <div className="slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={800}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide>
          <div className="slider__item">
            <img src="images/content/slider/moonfall.png" alt="slide" />
            <Link to={"/details/moonfall"}>
              <button className="slider__btn slider__btn-more" type="button">
                More info
              </button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider__item">
            <img src="images/content/slider/nope.jpg" alt="slide" />
            <Link to={"/details/nope"}>
              <button className="slider__btn slider__btn-more" type="button">
                More info
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item">
            <img src="images/content/slider/houseofthedragon.jpg" alt="slide" />
            <Link to={"/details/house%20of%20the%20dragon"}>
              <button className="slider__btn slider__btn-more" type="button">
                More info
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
