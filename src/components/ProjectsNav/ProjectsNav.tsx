'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

import css from './ProjectsNav.module.css';

type PropsType = {
  totalPages: number;
  page: number;
  limit: number;
};

export default function ProjectsNav({ totalPages, page, limit }: PropsType) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setPageAndLimit = useCallback(
    (newPage: number, newLimit: number) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set('page', String(newPage));
      params.set('limit', String(newLimit));

      router.push(`${window.location.pathname}?${params.toString()}`);
    },
    [router, searchParams]
  );

  useEffect(() => {
    const hasPage = searchParams.has('page');
    const hasLimit = searchParams.has('limit');

    if (!hasPage || !hasLimit) {
      setPageAndLimit(page, limit);
    }
  }, [searchParams, page, limit, setPageAndLimit]);

  return (
    <div className={css.wrapper}>
      <button
        className="primary-btn"
        onClick={() => setPageAndLimit(Math.max(1, page - 1), limit)}
        disabled={page <= 1}
      >
        <GrLinkPrevious />
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button
        className="primary-btn"
        onClick={() => setPageAndLimit(Math.min(totalPages, page + 1), limit)}
        disabled={page >= totalPages}
      >
        <GrLinkNext />
      </button>
    </div>
  );
}
