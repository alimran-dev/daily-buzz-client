import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddArticles from "../pages/AddArticles/AddArticles";
import AllArticles from "../pages/AllArticles/AllArticles";
import ArticleDetails from "../pages/ArticleDetails/ArticleDetails";
import PremiumArticles from "../pages/PremiumArticles/PremiumArticles";
import Subscription from "../pages/Subscription/Subscription";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/addArticles',
                element: <AddArticles />,
            },
            {
                path: '/allArticles',
                element: <AllArticles />,
            },
            {
                path: '/details/:id',
                element: <ArticleDetails />,
            },
            {
                path: '/subscription',
                element: <Subscription />,
            },
            {
                path: '/premiumArticles',
                element: <PremiumArticles />,
            }
        ]
    }
])
export default router;