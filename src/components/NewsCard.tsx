import Image from "next/image";
type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

export default function NewsCard({ article }: { article: Article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col dark:bg-gray-800 dark:text-blue-300">
      {article.urlToImage && (
        <Image
          src={article.urlToImage}
          alt={article.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3 dark:text-blue-300">
          {article.description}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium hover:underline mt-auto dark:bg-gray-800"
        >
          اقرأ المزيد ←
        </a>
      </div>
    </div>
  );
}