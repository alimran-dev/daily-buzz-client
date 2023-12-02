import { useState } from "react";
import ArticleCard from "./ArticleCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from "react-loader-spinner";

const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const perPageArticle = 5;

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axiosPublic.get(
        `/articles?page=${pageParam}&size=${perPageArticle}`
      );
      const data = res.data;
      setIsLoading(false);
      return { ...data, prevPageParams: pageParam };
    },
    getNextPageParam: (lastPage) => {
      if (
        lastPage.prevPageParams >
        Math.ceil(lastPage.articleCount / perPageArticle)
      ) {
        return false;
      }
      return lastPage.prevPageParams + 1;
    },
  });
  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  console.log(articles, data?.pages[0].articleCount);
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        All Articles
      </h1>
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={() => fetchNextPage()}
        hasMore={!(articles.length == data?.pages[0].articleCount)}
        loader={
          <div className="block w-fit mx-auto my-10">
            <RotatingLines
              strokeColor="#746C2E"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        }
        endMessage={
          <p className="text-4xl font-bold text-center my-5 text-[#746C2E]">
            You have reached the end of the articles
          </p>
        }
      >
        <div className="grid grid-cols-3 gap-5">
          {articles?.map((article) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllArticles;
