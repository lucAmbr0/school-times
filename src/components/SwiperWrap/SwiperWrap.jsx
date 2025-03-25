import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import styles from "./SwiperWrap.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

function SwiperWrap({ type, start, length }) {
  let startActive = null;

  const generateSlides = () => {
    const slides = [];
    startActive = new Date().getHours() - 7;
    if (startActive < 0) startActive = 0;
    else if (startActive > 9) startActive = 9;
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
      startActive = new Date().getDay() - 1;

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

  const [activeIndex, setActiveIndex] = useState(startActive);

  useEffect(() => {
    const swiperSlides = document.querySelectorAll(`.${styles.swiperSlide}`);
    
    swiperSlides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add(styles.selectedSlide);
      } else {
        slide.classList.remove(styles.selectedSlide);
      }
    });
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
        resistanceRatio={0.85}
        longSwipes={true}
        longSwipesRatio={0.1}
        longSwipesMs={300}
        initialSlide={startActive}
        slideToClickedSlide={true}
        grabCursor={true}
        cssMode={false}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.2,
          momentumVelocityRatio: 0.2,
          sticky: true,
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          handleSlideChange(swiper, swiper.slides[swiper.activeIndex]);
        }}
      >
        {slides}
      </Swiper>
    </>
  );

  return element;
}

function handleSlideChange(swiper, activeSlide) {
  activeSlide.classList.add(styles.selectedSlide);
  console.log(activeSlide.textContent);
}

export default SwiperWrap;
