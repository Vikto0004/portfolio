import css from './ServiceContainer.module.css';

import { useValidLang } from '@/utils/hooks/valid-lang';
import { ServicePagesContent } from '@/types/service-pages';

type PropsType = {
  data: ServicePagesContent;
};

export default function ServiceContainer({ data }: PropsType) {
  const lang = useValidLang();

  return (
    <>
      {data[lang].map((section, idx) => (
        <section key={idx} className={css.section}>
          <div className="container">
            <div className={css.content}>
              <h2 className={css.title}>{section.title}</h2>

              {section.paragraphs?.map((p, i) => (
                <p className={css.descr} key={i}>
                  {p}
                </p>
              ))}

              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li className={css.descr} key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
