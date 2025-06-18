import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { IoChevronDown } from 'react-icons/io5';

import { usePathname, useRouter } from '@/i18n/navigation';
import { langs, LangType } from '@/i18n/routing';
import { useValidLang } from '@/utils/hooks/valid-lang';

import css from './SelectLang.module.css';

export default function SelectLang() {
  const lang = useValidLang();

  const pathname = usePathname();
  const router = useRouter();

  const selectChange = (lang: LangType) => {
    const nextLocal = lang as LangType;
    const currentQuery = new URLSearchParams(window.location.search);
    const newPathname = `${pathname}?${currentQuery.toString()}`;

    router.replace(newPathname, {
      locale: nextLocal,
    });
  };

  return (
    <Listbox value={lang}>
      {({ open }) => (
        <div>
          {open && <div className={css.overlay}></div>}
          <ListboxButton className={css.button}>
            {lang.toUpperCase()}
            <IoChevronDown className={open ? css.listboxIconActive : ''} />
          </ListboxButton>
          <ListboxOptions className={css.listboxOptions} anchor="bottom end">
            {langs.map((lang, index) => (
              <ListboxOption key={index} value={langs}>
                <button className={css.link} onClick={() => selectChange(lang)}>
                  {lang.toUpperCase()}
                </button>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
}
