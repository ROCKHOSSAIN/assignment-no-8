import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";

const createRoute2 = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('data.json')
                
            },
            {
                path:'/donations',
                element:<Donations></Donations>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
        ])
    }
])
export {createRoute2}