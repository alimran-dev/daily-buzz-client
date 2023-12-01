import ArticleCard from "../AllArticles/ArticleCard";

const PremiumArticles = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">Premium Articles</h1>
            <div className="grid grid-cols-3 gap-5 mb-10">
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

export default PremiumArticles;