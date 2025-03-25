import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./SwiperWrap.module.css";
import { useEffect } from "react";

function SwiperWrap({ type, start, length }) {
  const onSlideChange = (swiper) => {
    const centeredIndex = swiper.activeIndex;
    swiper.slides.forEach((slide) => {
      slide.classList.remove(styles.selectedSlide);
    });
    const centeredSlide = swiper.slides[centeredIndex];
    console.log(centeredSlide ? centeredSlide.innerText : "No centered slide");
    setTimeout(() => {
      swiper.slides.forEach((slide) => {
        if (slide.innerText == centeredSlide.innerText) {
          slide.classList.add(styles.selectedSlide);
          swiper.update();
        }
      });
    }, 5);
  };

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

  const element = (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        // onSlideChangeTransitionEnd={onSlideChange}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiper}
        touchRatio={1.5}
        longSwipes={true}
        grabCursor={true}
        cssMode={true}
        slideActiveClass={styles.selectedSlide}
        slideToClickedSlide={true}
        freeMode={{
          enabled: true,
          momentumBounce: true,
          sticky: true,
        }}
        onTouchEnd={(swiper) => {
          setTimeout(() => {
            swiper.slideToClosest();
          }, 300);
        }}
      >
        {slides}
      </Swiper>
    </>
  );

  return element;
}

export default SwiperWrap;
