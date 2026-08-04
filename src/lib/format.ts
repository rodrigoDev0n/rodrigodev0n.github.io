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
    return `/posts/${slugFromId(id)}`;
}

