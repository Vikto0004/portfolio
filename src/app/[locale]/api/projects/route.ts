import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams, pathname } = new URL(req.url);

  const segments = pathname.split('/');
  const locale = segments[1] || 'en';

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  const url = new URL(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/projects`);

  url.searchParams.set('fields', '*,translations.*');
  url.searchParams.set('deep[translations][filter][locale][_eq]', locale);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('meta', 'total_count,filter_count');

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.DIRECTUS_STATIC_TOKEN ?? ''}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
