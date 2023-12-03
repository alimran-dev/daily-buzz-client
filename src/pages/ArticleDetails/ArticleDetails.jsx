import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../../components/Loader";
import { useState } from "react";

const ArticleDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: article } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/details/${id}`);
      const data = res.data;
      setIsLoading(false);
      return data;
    },
  });
  const { data } = useQuery({
    queryKey: ["views", "update"],
    queryFn: async () => {
      const res = await axiosSecure.patch(`/views/${id}`);
      const data = res.data;
      return data;
    },
  });
  console.log(article, data);
  const { title, img, publisher, views, description } = article || {};
  return (
    <div className="my-9">
      <Loader isLoading={isLoading} />
      <button
        onClick={() => navigate(-1)}
        className="bg-[#746C2E] py-1.5 px-5 text-xl text-white font-semibold mb-4 flex items-center gap-3 rounded"
      >
        <FaArrowLeft />
        Go Back
      </button>
      <h1 className="text-4xl font-semibold border-l-[6px] border-[#746C2E] pl-3 py-3">
        {title}
      </h1>
      <div className="w-3/4 h-96 mx-auto">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="flex gap-3">
        <span className="bg-gray-100 px-3 py-1 w-fit font-medium text-sm rounded my-2">
          {publisher}
        </span>
        <span className="bg-gray-100 px-3 py-1 w-fit font-medium text-sm rounded my-2">
          Total Views: {views}
        </span>
      </div>
      <div>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
