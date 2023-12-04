import { useQuery } from "@tanstack/react-query";
import ArticleCard from "../AllArticles/ArticleCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PremiumArticles = () => {
    const axiosSecure = useAxiosSecure();
    const { data } = useQuery({
        queryKey: ['premiumArticles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premiumArticles');
            return res.data;
        }
    });
    console.log(data);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">Premium Articles</h1>
            <div className="grid grid-cols-3 gap-5 mb-10">
                {
                    data?.map(article=><ArticleCard article={article} key={article._id}/>)
                }
            </div>
        </div>
    );
};

export default PremiumArticles;