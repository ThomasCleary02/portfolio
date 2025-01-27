import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://medium2.p.rapidapi.com/user/2b99c617ee3a/articles", {
            method: "GET",
            headers: {
              "X-Rapidapi-Key": "cb2c91cc4amsh0f8a46ceafe888bp196c35jsne2a6f1f9bfc7",
              "X-Rapidapi-Host": "medium2.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        const articleIDs = data.associated_articles;

        // Fetch article details for each article
        const articleDetailsPromises = articleIDs.map(async (id) => {
          const articleResponse = await fetch(
            `https://medium2.p.rapidapi.com/article/${id}`, {
              method: "GET",
              headers: {
                "X-Rapidapi-Key": "cb2c91cc4amsh0f8a46ceafe888bp196c35jsne2a6f1f9bfc7",
                "X-Rapidapi-Host": "medium2.p.rapidapi.com",
              },
            }
          );
          const articleData = await articleResponse.json();
          return articleData;
        });

        const articles = await Promise.all(articleDetailsPromises);
        setArticles(articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
