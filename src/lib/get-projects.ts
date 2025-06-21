export async function getProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/projects?fields=*,translations.*`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error('Failed to fetch projects');

  const { data } = await res.json();
  return data;
}

export async function getProjectById(id: string) {
  const res = await fetch(`http://localhost:8055/items/projects/${id}?fields=*,translations.*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch project');

  const { data } = await res.json();
  return data;
}
