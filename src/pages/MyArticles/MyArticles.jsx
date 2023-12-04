import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ArticleRow from "./ArticleRow";
import Modal from "./Modal";

const MyArticles = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data,refetch} = useQuery({
        queryKey: ['myArticles'],
        queryFn:async () => {
            const res = await axiosSecure.get(`/myArticles?email=${user?.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    console.log(data)
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} feedback={feedback} />
            <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-8">
        My Articles
            </h1>
            <div>
                <table className="w-full mb-10">
                    <thead>
                        <tr className="grid grid-cols-9 bg-[#746C2E] text-white">
                            <th className="border py-3">#</th>
                            <th className="border py-3 col-span-3">Title</th>
                            <th className="border py-3">isPremium</th>
                            <th className="border py-3">Status</th>
                            <th className="border py-3">Update</th>
                            <th className="border py-3">Delete</th>
                            <th className="border py-3">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="grid grid-cols-9">
                            <td className="border flex items-center justify-center font-medium">01</td>
                            <td className="border col-span-3 text-center font-semibold py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, officia?</td>
                            <td className="border flex items-center justify-center font-bold">Yes</td>
                            <td className="border flex items-center justify-center"><span className="capitalize font-bold">approved</span></td>
                            <td className="border flex items-center justify-center"><button className="bg-purple-700 text-white py-1.5 px-3 font-semibold rounded ">Update</button></td>
                            <td className="border flex items-center justify-center"><button className="bg-red-600 py-1.5 px-3 text-white rounded font-semibold">Delete</button></td>
                            <td className="border flex items-center justify-center"><button className="bg-[#746C2E] py-1.5 px-3 font-semibold text-white rounded">Details</button></td>
                        </tr>
                        <tr className="grid grid-cols-9">
                            <td className="border flex items-center justify-center font-medium">01</td>
                            <td className="border col-span-3 text-center font-semibold py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, officia?</td>
                            <td className="border flex items-center justify-center font-bold">Yes</td>
                            <td className="border flex items-center justify-center"><span className="capitalize font-bold">approved</span></td>
                            <td className="border flex items-center justify-center"><button className="bg-purple-700 text-white py-1.5 px-3 font-semibold rounded ">Update</button></td>
                            <td className="border flex items-center justify-center"><button className="bg-red-600 py-1.5 px-3 text-white rounded font-semibold">Delete</button></td>
                            <td className="border flex items-center justify-center"><button className="bg-[#746C2E] py-1.5 px-3 font-semibold text-white rounded">Details</button></td>
                        </tr> */}
                        {
                            data?.map((article, idx) => <ArticleRow key={article._id} article={article} id={idx + 1} refetch={refetch} setIsOpen={setIsOpen} setFeedback={setFeedback} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArticles;