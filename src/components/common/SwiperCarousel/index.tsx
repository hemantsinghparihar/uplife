import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { cn } from '../../../utils/utils';

// Import Core Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Icons } from '../../../assets';

const SwiperCarousel = ({ 
  data = [], 
  renderItem, 
  breakpoints = {
    320: { slidesPerView: 1.2, spaceBetween: 15 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  }
}) => {
  // Use state for refs to trigger a re-render when the elements are actually available
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="w-full relative py-5">
      <Swiper
        // Remove Pagination module here to hide dots
        modules={[Navigation, Autoplay, A11y]}
        navigation={{
          prevEl,
          nextEl,
        }}
        // Ensures swiper re-renders when buttons are found
        onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevEl;
            swiper.params.navigation.nextEl = nextEl;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        }}
        loop={true}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Container */}
      {/* Hidden on desktop (lg), centered flex on mobile */}
      <div className="flex lg:hidden justify-center items-center gap-2 mt-10">
        <button
          ref={(node) => setPrevEl(node)}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center",
            "text-white text-2xl transition-all active:scale-90",
            "disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          )}
          aria-label="Previous slide"
        >
          <img src={Icons.leftArrow} alt="" />
        </button>
        
        <button
          ref={(node) => setNextEl(node)}
          className={cn(
            "w-14 h-14 rounded-full rotate-180 flex items-center justify-center",
            "text-white text-2xl transition-all active:scale-90",
            "disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          )}
          aria-label="Next slide"
        >
          <img src={Icons.leftArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SwiperCarousel;