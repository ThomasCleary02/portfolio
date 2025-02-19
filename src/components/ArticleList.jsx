import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const cachedData = localStorage.getItem("articles");
        const cacheTimestamp = localStorage.getItem("cacheTimestamp");

        const isCacheValid =
          cachedData && 
          cacheTimestamp && 
          Date.now() - cacheTimestamp < CACHE_EXPIRATION_TIME;

        if (isCacheValid) {
          setArticles(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch(
            "https://projects-database-d25a17e83152.herokuapp.com/api/articles/"
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          localStorage.setItem("articles", JSON.stringify(data));
          localStorage.setItem("cacheTimestamp", Date.now().toString());

          setArticles(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (articles.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No articles found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;