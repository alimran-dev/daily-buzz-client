import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="bg-[#746C2E] h-full w-72 flex flex-col text-white font-semibold mx-8 my-10">
                <Link to={'/dashboard/allUsers'} className="py-2 px-10 border ">All Users</Link>
                <Link to={'/dashboard/allArticles'} className="py-2 px-10 border ">All Articles</Link>
                <Link to={'/dashboard/addPublisher'} className="py-2 px-10 border ">Add Publisher</Link>
            </div>
            <div className="flex items-center justify-center mr-12 w-full my-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;