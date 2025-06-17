import css from './ProjectList.module.css';

type Props = {
  data: string[];
};

export default function ProjectList({ data }: Props) {
  return (
    <ul className={css.list}>
      {data.map((item, index) => (
        <li className={css.item} key={index}>
          <span className={css.itemBullet}>•</span>
          <span className={css.itemText}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
