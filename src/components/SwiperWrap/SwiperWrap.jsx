import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import styles from "./SwiperWrap.module.css";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
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
        modules={[ FreeMode, Pagination, Navigation ]}
        spaceBetween={0}
        className={styles.swiper}
        touchRatio={1}
        touchMoveStopPropagation={false}
        grabCursor={true}
        cssMode={false}
        slideActiveClass={styles.selectedSlide}
        slideToClickedSlide={true}
        freeMode={{
          enabled: true,
          momentumBounce: true,
          sticky: true,
        }}
        onSlideNextTransitionEnd ={(swiper) => {
              swiper.slideToClosest();
              console.log("BOBBO");
        }}
      >
        {slides}
      </Swiper>
    </>
  );

  return element;
}

export default SwiperWrap;
