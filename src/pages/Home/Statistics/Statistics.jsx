import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Statistics = () => {
    const axiosPublic = useAxiosPublic();
    const { data } = useQuery({
        queryKey: ['statistics'],
        queryFn: async () => {
            const res = await axiosPublic.get('/userCount');
            return res.data;
        }
    })
    console.log(data);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-8">
        Statistics
            </h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-4">
                <div className="w-52 border p-5 flex flex-col items-center justify-center gap-2">
                    <p className="text-2xl font-bold text-gray-700 text-center">Total User</p>
                    <p className="text-xl font-bold text-blue-700 text-center"><CountUp end={data?.totalUser}/></p>
                </div>
                <div className="w-52 border p-5 flex flex-col items-center justify-center gap-2">
                    <p className="text-2xl font-bold text-gray-700 text-center">Normal User</p>
                    <p className="text-xl font-bold text-blue-700 text-center"><CountUp end={data?.normalUser}/></p>
                </div>
                <div className="w-52 border p-5 flex flex-col items-center justify-center gap-2">
                    <p className="text-2xl font-bold text-gray-700 text-center">Premium User</p>
                    <p className="text-xl font-bold text-blue-700 text-center"><CountUp end={data?.premiumUser}/></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;