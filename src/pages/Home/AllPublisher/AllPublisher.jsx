import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PublisherCard from "./PublisherCard";
import Marquee from "react-fast-marquee";

const AllPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publishers");
      return res.data;
    },
  });
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-8">
        Our publishers
      </h1>
      <Marquee>
        {data?.map((publisher) => (
          <PublisherCard publisher={publisher} key={publisher._id} />
        ))}
      </Marquee>
    </div>
  );
};

export default AllPublisher;
