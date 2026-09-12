import NewsList from "@/components/NewsList";
import ThemeToggle from "@/components/ThemeToggle";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

async function getNews() {
  const apikey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=أخبار OR مصر OR رياضة OR تكنولوجيا OR اقتصاد&language=ar&sortBy=publishedAt&pageSize=50&apiKey=${apikey}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  const data = await response.json();
  return data.articles || [];
}

export default async function Home() {
  const articles: Article[] = await getNews();

  return (
    <main className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        NewsPulse
      </h1>
      <NewsList articles={articles} />
    </main>
  );
}
