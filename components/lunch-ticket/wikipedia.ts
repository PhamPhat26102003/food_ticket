export async function wikiThumbs(lang: "vi" | "en", titles: string[]) {
  const unique = [...new Set(titles.filter(Boolean))];
  if (unique.length === 0) return {} as Record<string, string>;

  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    redirects: "1",
    prop: "pageimages",
    piprop: "thumbnail",
    pithumbsize: "240",
    titles: unique.join("|"),
  });
  const res = await fetch(`https://${lang}.wikipedia.org/w/api.php?${params}`);
  const data = await res.json();
  const pages = Object.values(data.query?.pages ?? {}) as {
    title: string;
    thumbnail?: { source: string };
  }[];
  const byFinalTitle: Record<string, string> = {};
  for (const page of pages) {
    if (page.thumbnail?.source)
      byFinalTitle[page.title] = page.thumbnail.source;
  }

  const thumbs: Record<string, string> = { ...byFinalTitle };
  for (const row of [
    ...(data.query?.normalized ?? []),
    ...(data.query?.redirects ?? []),
  ] as { from: string; to: string }[]) {
    if (byFinalTitle[row.to]) thumbs[row.from] = byFinalTitle[row.to];
  }
  return thumbs;
}
