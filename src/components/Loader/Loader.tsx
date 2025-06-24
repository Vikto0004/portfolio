import clsx from 'clsx';

import css from './Loader.module.css';

export default function Loader({ overlay = true }: { overlay?: boolean }) {
  return (
    <div className={clsx(overlay && css.overlay)}>
      <div className={css.loadingioSpinner}>
        <div className={css.ldio}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
