import apiIntegration from '@/../public/images/services/api-integration.png';
import deployment from '@/../public/images/services/deployment.png';
import reactNext from '@/../public/images/services/react-next.png';
import responsiveDesign from '@/../public/images/services/responsive-design.png';
import siteFromScratch from '@/../public/images/services/site-from-scratch.png';
import support from '@/../public/images/services/support.png';

export const services = [
  {
    key: 'websiteCreation',
    image: siteFromScratch,
    translations: {
      en: {
        letter: 'W',
        title: 'Website Creation from Scratch',
        description:
          'I develop websites tailored to your needs, starting from zero. No templates — just clean, purposeful code.',
      },
      uk: {
        letter: 'С',
        title: 'Створення сайту з нуля',
        description: 'Розробляю сайти під ваші потреби — без шаблонів, лише чистий і якісний код.',
      },
      pl: {
        letter: 'T',
        title: 'Tworzenie stron od podstaw',
        description:
          'Tworzę strony dostosowane do Twoich potrzeb — bez szablonów, tylko czysty i solidny kod.',
      },
    },
  },
  {
    key: 'reactNext',
    image: reactNext,
    translations: {
      en: {
        letter: 'R',
        title: 'React & Next.js Development',
        description:
          'I build fast, scalable, and SEO-friendly web applications using React and Next.js.',
      },
      uk: {
        letter: 'R',
        title: 'Розробка на React та Next.js',
        description: 'Створюю швидкі, масштабовані та SEO-оптимізовані веб-додатки.',
      },
      pl: {
        letter: 'R',
        title: 'Rozwój w React i Next.js',
        description: 'Buduję szybkie, skalowalne i zoptymalizowane pod SEO aplikacje internetowe.',
      },
    },
  },
  {
    key: 'responsive',
    image: responsiveDesign,
    translations: {
      en: {
        letter: 'A',
        title: 'Adaptive & Responsive Layouts',
        description: 'Whether on mobile or desktop — your website will look perfect everywhere.',
      },
      uk: {
        letter: 'А',
        title: 'Адаптивна та респонсивна верстка',
        description:
          'Ваш сайт виглядатиме чудово на будь-якому пристрої — мобільному чи десктопному.',
      },
      pl: {
        letter: 'R',
        title: 'Responsywny i adaptacyjny układ',
        description:
          'Twoja strona będzie wyglądać świetnie na każdym urządzeniu — mobilnym czy stacjonarnym.',
      },
    },
  },
  {
    key: 'apiCms',
    image: apiIntegration,
    translations: {
      en: {
        letter: 'I',
        title: 'API & CMS Integration',
        description:
          'I can connect your site to external APIs or integrate content management systems to keep things flexible.',
      },
      uk: {
        letter: 'І',
        title: 'Інтеграція API та CMS',
        description: 'Підключаю зовнішні API або інтегрую CMS для зручного керування контентом.',
      },
      pl: {
        letter: 'I',
        title: 'Integracja API i CMS',
        description:
          'Podłączam zewnętrzne API lub integruję CMS dla elastycznego zarządzania treścią.',
      },
    },
  },
  {
    key: 'deployment',
    image: deployment,
    translations: {
      en: {
        letter: 'D',
        title: 'Domain Setup & Deployment',
        description:
          'Full setup from dev to production: domain connection and deployment via Vercel or Railway.',
      },
      uk: {
        letter: 'Д',
        title: 'Підключення домену та деплой',
        description:
          'Повне налаштування: від розробки до продакшену, включаючи підключення домену та деплой.',
      },
      pl: {
        letter: 'K',
        title: 'Konfiguracja domeny i wdrożenie',
        description:
          'Pełna konfiguracja: od developmentu po produkcję — z podłączeniem domeny i wdrożeniem.',
      },
    },
  },
  {
    key: 'support',
    image: support,
    translations: {
      en: {
        letter: 'S',
        title: 'Support & Maintenance',
        description: 'I stay available for updates, support, or new features even after launch.',
      },
      uk: {
        letter: 'П',
        title: 'Підтримка та супровід',
        description: "Залишаюсь на зв'язку після запуску — оновлення, підтримка, нові функції.",
      },
      pl: {
        letter: 'W',
        title: 'Wsparcie i utrzymanie',
        description: 'Pozostaję dostępny po uruchomieniu — aktualizacje, wsparcie, nowe funkcje.',
      },
    },
  },
];
