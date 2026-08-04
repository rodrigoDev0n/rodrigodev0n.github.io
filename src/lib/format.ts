export function formatDate(date: Date): string {
  return date.toLocaleDateString('es', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function slugFromId(id: string): string {
  return id.replace(/\.md$/, '');
}

export function postHref(id: string): string {
    const base = import.meta.env.BASE_URL;
    return `${base.endsWith('/') ? base : base + '/'}posts/${slugFromId(id)}`;
}

