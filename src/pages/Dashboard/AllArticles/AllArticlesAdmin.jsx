import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ArticleRow from "./ArticleRow";

const AllArticlesAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["allArticles", "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articlesAll");
      return res.data;
    },
  });
  return (
    <div className="w-full">
      <table className="w-full mb-10">
        <thead>
          <tr className="grid grid-cols-7 bg-[#746C2E] text-white">
            <th className="border py-3">#</th>
            <th className="border py-3">Title</th>
            <th className="border py-3">Author</th>
            <th className="border py-3">Date</th>
            <th className="border py-3">Status</th>
            <th className="border py-3">Publisher</th>
            <th className="border py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((article, idx) => (
            <ArticleRow
              key={article._id}
              article={article}
              id={idx + 1}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArticlesAdmin;
