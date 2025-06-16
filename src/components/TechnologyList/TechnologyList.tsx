import Image from "next/image";

import { technologies } from "../data/technologyData";

import css from "./TechnologyList.module.css";

export default function TechnologyList() {
  return (
    <ul className={css.list}>
      {technologies.map((tech, index) => (
        <li key={index} className={css.listItem}>
          <Image
            src={tech.logo}
            alt={`${tech.name} Logo`}
            width={60}
            height={60}
            className={css.listItemImg}
          />
          {tech.name}
        </li>
      ))}
    </ul>
  );
}
