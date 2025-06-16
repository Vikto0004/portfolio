import { useTranslations } from "next-intl";

import TechnologyList from "../TechnologyList/TechnologyList";

import css from "./Technology.module.css";

export default function Technology() {
  const t = useTranslations("Technology");
  return (
    <section className={css.technology}>
      <div className="container">
        <div className="content-center">
          <p className="section-name">{t("sectionName")}</p>
          <h2 className="title">{t("title")}</h2>
          <p className="descr">{t("description")}</p>
        </div>
        <TechnologyList />
      </div>
    </section>
  );
}
