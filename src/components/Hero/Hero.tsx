'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import heroImg from '../../../public/images/hero-img.jpeg';
import css from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

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
              const target = parseInt(item.getAttribute('data-target') || '0', 10);
              if (!item.classList.contains('animated')) {
                animateValue(item, target);
                item.classList.add('animated');
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
          <h1 className={css.heroTitle}>{t('title')}</h1>
          <p className={clsx(css.heroDescr, 'descr')}>{t('description')}</p>
          <a href="#services" className="primary-btn">
            {t('buttonText')}
          </a>
        </div>
        <div className="wrapper">
          <Image
            src={heroImg}
            width={500}
            height={500}
            priority
            alt="Viktor — web developer"
            className="wrapper-img"
          />
        </div>
        <ul className={css.statsList}>
          <li className={css.statsItem}>
            <p className={css.statsItemSubtitle} data-target="14">
              0<span>+</span>
            </p>
            <p className="descr">{t('statsList.clients')}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsItemSubtitle} data-target="16">
              0
            </p>
            <p className="descr">{t('statsList.projects')}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsItemSubtitle} data-target="100">
              0<span>%</span>
            </p>
            <p className="descr">{t('statsList.responsibility')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
