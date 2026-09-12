"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const categories = {
  الكل: [],
  تكنولوجيا: ["آيفون", "أبل", "تقنية", "ذكاء اصطناعي", "تطبيق", "هاتف"],
  رياضة: ["رياضة", "مباراة", "كرة", "دوري", "لاعب"],
  اقتصاد: ["اقتصاد", "دولار", "سوق", "شركة", "استثمار"],
};

export default function NewsList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredArticles = articles.filter((article) => {
    const text = (article.title + " " + article.description).toLowerCase();

    const matchesSearch = text.includes(search.toLowerCase());

    const keywords = categories[activeCategory as keyof typeof categories];
    const matchesCategory =
      activeCategory === "الكل" ||
      keywords.some((keyword) => text.includes(keyword.toLowerCase()));

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="max-w-md mx-auto mb-4">
        <input
          type="text"
          placeholder="ابحث عن خبر..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-white"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              activeCategory === cat
                ? "bg-blue-600 text-white dark:bg-gray-800"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 "
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
}