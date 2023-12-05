import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserRow from "./UserRow";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });
  return (
    <div>
      <table className="w-full mb-10">
        <thead>
          <tr className="grid grid-cols-5 bg-[#746C2E] text-white">
            <th className="border py-3">#</th>
            <th className="border py-3">Name</th>
            <th className="border py-3">Image</th>
            <th className="border py-3">Email</th>
            <th className="border py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, idx) => (
            <UserRow
              key={user._id}
              user={user}
              id={idx + 1}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
