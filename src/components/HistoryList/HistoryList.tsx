import clsx from 'clsx';

import { useValidLang } from '@/utils/hooks/valid-lang';

import 'swiper/css';
import { historyItems } from '../data/historyData';

import css from './HistoryList.module.css';

export default function HistoryList() {
  const lang = useValidLang();

  return (
    <ul className="swiper-wrapper">
      {historyItems.map(({ key, year, translations }) => (
        <li key={key} className={clsx(css.historyItem, 'swiper-slide')}>
          <div className={css.historyItemWrap}>
            <span>{year}</span>
          </div>
          <div className={css.historyItemContent}>
            <h3 className="subtitle">{translations[lang].title}</h3>
            <p className="descr">{translations[lang].description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
