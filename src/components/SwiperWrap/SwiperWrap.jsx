import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import styles from "./SwiperWrap.module.css";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useState, useEffect } from "react";

function SwiperWrap({ type, start, length }) {

  const generateSlides = () => {
    const slides = [];
    if (type == "time") {
      for (let i = 0; i < length; i++) {
        const hour = start + i;
        slides.push(
          <SwiperSlide
            key={`time-${hour}`}
            className={styles.swiperSlide}
          >{`${hour}:00`}</SwiperSlide>
        );
      }
    } else if (type == "days") {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      for (let i = 0; i < days.length; i++) {
        slides.push(
          <SwiperSlide
            key={`day-${days[i]}`}
            className={styles.swiperSlide}
          >{`${days[i]}`}</SwiperSlide>
        );
      }
    }
    return slides;
  };

  const slides = generateSlides();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex !== null) {
      const swiperSlides = document.querySelectorAll(`.${styles.swiperSlide}`);
      console.log(swiperSlides);
      console.log(activeIndex);
      
      swiperSlides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add(styles.selectedSlide);
        } else {
          slide.classList.remove(styles.selectedSlide);
        }
      });
    }
  }, [activeIndex]);

  const element = (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={0}
        className={styles.swiper}
        touchRatio={1}
        longSwipesRatio={5}
        resistanceRatio={0.7}
        grabCursor={true}
        longSwipes={false}
        cssMode={false}
        slideToClickedSlide={true}
        freeMode={{
          enabled: true,
          momentumBounce: true,
          sticky: true,
        }}
        onSlideChangeTransitionEnd ={(swiper) => {
              swiper.slideToClosest();
              swiper.slides.forEach((slide) => {
                slide.classList.remove(styles.selectedSlide);
              });
              const centeredSlide = swiper.slides[swiper.activeIndex];
              if (centeredSlide) {
                centeredSlide.classList.add(styles.selectedSlide);
              }
        }}
      >
        {slides}
      </Swiper>
    </>
  );

  return element;
}

export default SwiperWrap;
