import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import styles from "./SwiperWrap.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

function SwiperWrap({ type, start, length }) {
  const [activeSlide, setActiveSlide] = useState(Infinity);

  useEffect(() => {
    if (type === "time") {
      // setActiveSlide(new Date().getHours() - 7);
      setActiveSlide(0);
    } else if (type === "days") {
      setActiveSlide(6);
    }
  }, []);

  const generateSlides = () => {
    const slides = [];
    if (type === "time") {
      for (let i = 0; i < length; i++) {
        const hour = start + i;
        const slst = `${styles.swiperSlide} ${
          i === activeSlide ? styles.selectedSlide : ""
        }`;
        slides.push(
          <SwiperSlide
            key={`time-${hour}`}
            className={slst}
          >{`${hour}:00`}</SwiperSlide>
        );
      }
    } else if (type === "days") {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      for (let i = 0; i < days.length; i++) {
        const slst = `${styles.swiperSlide} ${
          i === activeSlide ? styles.selectedSlide : ""
        }`;
        slides.push(
          <SwiperSlide
            key={`day-${days[i]}`}
            className={slst}
          >{`${days[i]}`}</SwiperSlide>
        );
      }
    }
    return slides;
  };

  const slides = generateSlides();
  if (activeSlide == Infinity) {
    return null;
  }
  return (
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
      initialSlide={activeSlide}
      slideActiveClass={styles.selectedSlide}
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
      onSlideChange={(swiper) => {
        if (swiper.params.slideActiveClass) {
          swiper.params.slideActiveClass = null;
        }
      }}
      onSlideChangeTransitionStart={(swiper) => {
        swiper.slides.forEach((s) => {
          s.classList.remove(`${styles.selectedSlide}`);
        });
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        setActiveSlide(swiper.activeIndex);
        handleSlideChange(swiper, swiper.slides[swiper.activeIndex]);
      }}
    >
      {slides}
    </Swiper>
  );
}

function handleSlideChange(swiper, activeSlide) {
  swiper.slides.forEach((s) => {
    s.classList.remove(`${styles.selectedSlide}`);
  });
  activeSlide.classList.add(styles.selectedSlide);
}

export default SwiperWrap;
