"use client";

import { useEffect } from "react";
import css from "./Hero.module.css";
import heroImg from "../../../public/images/hero-img.jpeg";
import Image from "next/image";
import clsx from "clsx";

export default function Hero() {
  function animateValue(el: HTMLElement, end: number, duration = 2000) {
    const start = 0;
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * range + start);
      const firstChild = el.firstChild;

      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        firstChild.nodeValue = value.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll<HTMLElement>(
              `.${css.statsItemSubtitle}`
            );

            statItems.forEach((item) => {
              const target = parseInt(
                item.getAttribute("data-target") || "0",
                10
              );
              if (!item.classList.contains("animated")) {
                animateValue(item, target);
                item.classList.add("animated");
              }
            });

            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsList = document.querySelector(`.${css.statsList}`);
    if (statsList) {
      observer.observe(statsList);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={css.hero}>
      <div className="container container-flex">
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Empowering Your Financial Future</h1>
          <p className={clsx(css.heroDescr, "descr")}>
            Discover the path to financial literacy and stability. Learn modern
            approaches to income determination, budget planning, and investment
            strategies to achieve your financial goals.
          </p>
          <a href="#our-services" className="primary-btn">
            Learn More
          </a>
        </div>
        <div className="wrapper">
          <Image src={heroImg} alt="hero image" className="wrapper-img" />
        </div>
        <ul className={css.statsList}>
          <li className={css.statsItem}>
            <h3 className={css.statsItemSubtitle} data-target="95">
              0<span>%</span>
            </h3>
            <p className="descr">Financial literacy improvement</p>
          </li>
          <li className={css.statsItem}>
            <h3 className={css.statsItemSubtitle} data-target="50">
              0<span>M</span>
            </h3>
            <p className="descr">Savings and investments managed</p>
          </li>
          <li className={css.statsItem}>
            <h3 className={css.statsItemSubtitle} data-target="200">
              0<span>+</span>
            </h3>
            <p className="descr">Expert advisors</p>
          </li>
          <li className={css.statsItem}>
            <h3 className={css.statsItemSubtitle} data-target="300">
              0<span>%</span>
            </h3>
            <p className="descr">Investment growth achieved</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
