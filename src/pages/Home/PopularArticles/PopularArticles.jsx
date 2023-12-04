import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ArticleCard from "../../AllArticles/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const PopularArticles = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["popularArticle"],
    queryFn: async () => {
      const res = await axiosPublic.get("popularArticle");
      return res.data;
    },
  });
  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        Trending Articles
      </h1>
      {/* <div className="grid grid-cols-3 gap-5">
        {data?.map((article) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div> */}
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data?.map((article) => (
          <SwiperSlide style={{ paddingBottom: "40px" }} key={article._id}>
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PopularArticles;
