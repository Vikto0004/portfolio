import clsx from "clsx";
import { useTranslations } from "next-intl";

import ServicesList from "../ServicesList/ServicesList";

import css from "./Services.module.css";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className={css.services} id="services">
      <div className="container">
        <div className="content-center">
          <p className="section-name">{t("sectionName")}</p>
          <h2 className="title">{t("title")}</h2>
          <p className={clsx(css.servicesItemDescr, "descr")}>
            {t("description")}
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
}
