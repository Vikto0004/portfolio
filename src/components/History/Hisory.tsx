"use client";

import "swiper/css";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import HistoryList from "../HistoryList/HistoryList";
import SwiperNav from "../SwiperNav/SwiperNav";

import css from "./Hisory.module.css";

export default function History() {
  const t = useTranslations("History");

  useEffect(() => {
    new Swiper(".swiperHistory", {
      slidesPerView: 1,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next-history",
        prevEl: ".swiper-button-prev-history",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      },
    });
  }, []);

  return (
    <section className={css.history}>
      <div className="container">
        <div className="content-center">
          <p className="section-name">{t("sectionName")}</p>
          <h2 className="title">{t("title")}</h2>
          <p className="descr">{t("description")}</p>
        </div>
        <div className="swiper swiperHistory">
          <HistoryList />
          <SwiperNav swiperClass="history" />
        </div>
      </div>
    </section>
  );
}
