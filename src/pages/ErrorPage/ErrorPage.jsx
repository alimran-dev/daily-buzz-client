import { Link } from "react-router-dom";
import errorImg from "../../assets/error.jpg"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex-1 flex items-center justify-center">
            <img src={errorImg} alt="" className="w-96" />
            </div>
            <div className="flex-1 space-y-3">
                <h1 className="text-7xl font-bold">Error</h1>
                <p className="text-2xl font-medium">Page not found</p>
                <Link to={'/'} className="bg-[#746C2E] py-2 px-4 text-lg font-semibold text-white rounded-md block w-fit">Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;