import ArticleCard from "./ArticleCard";

const AllArticles = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        All Articles
          </h1>
          <div className="grid grid-cols-3 gap-5"> 
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          </div>
    </div>
  );
};

export default AllArticles;
