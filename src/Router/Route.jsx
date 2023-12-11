import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Project from "../Shared/Project";


const siteRoute = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/project.json')
            },
            {
                path: 'project',
                element: <Project></Project>
            }
        ]
    }
]);

export default siteRoute;