import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Layout/Home/Home";
import Layout from "../components/Layout/Layout";
import AddToy from "../components/Pages/AddToy";
import AllToys from "../components/Pages/AllToys";
import Blog from "../components/Pages/Blog";
import Login from "../components/Pages/Login";
import MyToy from "../components/Pages/MyToy";
import Register from "../components/Pages/Register";
import ErrorPage from "../components/Pages/Shared/ErrorPage";
import UpdateToy from "../components/Pages/UpdateToy";
import ViewDetails from "../components/Pages/ViewDetails";
import PrivateRoute from "./PrivateRoutes";
// import Tabs from "../components/Layout/Home/Tabs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
       path:"blog",
       element:<Blog></Blog>,
      },
      {
        path:"myToy",
        element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
           path:"addToy",
           element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:"allToy",
        element:<AllToys></AllToys>
      },
      {
        path:"viewDetails/:id",
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://y-omega-five.vercel.app/toys/${params.id}`)
      },
      {
        path:'updateToy/:id',
        element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader:({params})=>fetch(`https://y-omega-five.vercel.app/toys/${params.id}`)

      },
     
    
    ]
  },
  
]);
export default router;