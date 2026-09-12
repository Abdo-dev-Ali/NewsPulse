export async function GET() {
  const apikey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=أخبار OR مصر OR رياضة OR تكنولوجيا OR اقتصاد&language=ar&sortBy=publishedAt&pageSize=50&apiKey=${apikey}`;
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return Response.json(data);
}
