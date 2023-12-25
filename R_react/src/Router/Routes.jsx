import React from "react";

import Home from "../Components/Home/Home";
import { createBrowserRouter } from "react-router-dom";



import About from "../Components/About/About";



const router =  createBrowserRouter([
    
    {
       
        children:[{
    
             path :'/About',
            element :<About></About>,
        
        },
        {
        path : '/Home',
        element:<Home></Home>,
        }
    ]
}

    
])
  export default router;