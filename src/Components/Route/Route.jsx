import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";
import DetailsPage from "../../Pages/DetailsPage/DetailsPage";

const createRoute2 = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
                
            },
            {
                path:'/donations',
                element:<Donations></Donations>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/details/:id',
                loader:()=>fetch('/data.json'),
                element:<DetailsPage></DetailsPage>,
            }
        ])
    }
])
export {createRoute2}