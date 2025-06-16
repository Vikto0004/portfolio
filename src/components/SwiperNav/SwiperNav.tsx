import clsx from "clsx";

import "swiper/css/navigation";
import css from "./SwiperNav.module.css";
import "swiper/css";

export default function SwiperNav({ swiperClass }: { swiperClass: string }) {
  return (
    <div className={css.swiperNav}>
      <div
        className={clsx(
          `primary-btn swiper-button-prev-${swiperClass} swiper-button-prev`,
          css.swiperButtonPrev,
        )}
      ></div>
      <div
        className={clsx(
          `primary-btn swiper-button-next-${swiperClass} swiper-button-next`,
          css.swiperButtonNext,
        )}
      ></div>
    </div>
  );
}
