import NewsList from "@/components/NewsList";
import ThemeToggle from "@/components/ThemeToggle";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export default async function Home() {
  const res = await fetch(`${getBaseUrl()}/api/news`);
  const data = await res.json();
  const articles: Article[] = data.articles || [];

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
