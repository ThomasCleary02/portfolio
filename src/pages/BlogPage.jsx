import ArticleList from "../components/ArticleList";

const BlogPage = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="mb-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-primaryBlue mb-4">
          Explore My Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl">
          A collection of articles where I share my thoughts and experiences.
        </p>
      </div>

      <ArticleList />
    </div>
  );
};

export default BlogPage;
