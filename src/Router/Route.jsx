import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Projects from "../pages/Projects/Projects";
import Technologies from "../pages/Technologies/Technologies";
import AboutMenu from "../pages/AboutMenu/AboutMenu";


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
                element: <Projects></Projects>
            },
            {
                path: 'technologies',
                element: <Technologies></Technologies>
            },
            {
                path: 'aboutMenu',
                element: <AboutMenu></AboutMenu>
            }

        ]
    }
]);

export default siteRoute;