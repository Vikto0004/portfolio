import clsx from 'clsx';
import Image from 'next/image';

import { services } from '@/components/data/servicesData';
import { useValidLang } from '@/utils/hooks/valid-lang';

import css from './ServicesList.module.css';

export default function ServicesList() {
  const lang = useValidLang();

  return (
    <ul className={css.servicesList}>
      {services.map((service) => {
        const { letter, title, description } = service.translations[lang];

        return (
          <li className={css.servicesItem} key={service.key}>
            <div className={css.servicesItemWrap}>
              <span>{letter}</span>
              <h3 className={clsx(css.servicesItemSubtitle, 'subtitle')}>{title}</h3>
              <Image src={service.image} alt={title} width={100} height={100} />
            </div>
            <p className={clsx(css.servicesItemDescr, 'descr')}>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}
