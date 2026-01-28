import { createBrowserRouter } from "react-router-dom";
// import { Layout } from "../components/Layout";
import { Layout } from "../components/layouts/Layout";
// import Dashboard from "../pages/dashboard";
import Routes from "./routeConfig";
import PrivateRoute from "./privateRoute";
import Dashboard from "../pages/dashboard";
import Products from "../pages/products";
import Faq from "../pages/faq";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";


const router=createBrowserRouter([

    {
        path:Routes.DASHBOARD,
        element:<PrivateRoute  component={Layout}/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:Routes.PRODUCTS,
                element:<Products/>
            },
            {
                path:Routes.FAQ,
                element:<Faq/>
            },
            {
                path:Routes.BLOGS,
                element:<Blogs/>
            },
            {
                path:Routes.CONTACT,
                element:<Contact/>
            },
        ]
    }
], {
    basename: import.meta.env.BASE_URL
})
export default router