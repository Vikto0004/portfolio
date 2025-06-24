import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ locale: string; id: string }> }
) {
  const params = await context.params;
  const { locale, id } = params;

  const url = new URL(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/projects/${id}`);
  url.searchParams.set('fields', '*,translations.*');
  url.searchParams.set('filter[status][_eq]', 'published');
  url.searchParams.set('deep[translations][filter][locale][_eq]', locale);

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

  data.data.translations = data.data.translations?.filter((t: any) => t.locale === locale);

  return NextResponse.json(data);
}
