import { useState } from 'react'
import './App.css'
import router from './Router/Routes'
import { Outlet, RouterProvider} from 'react-router-dom'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'


function App() {


  return (
   
    <>
   
  
   

   <a href='/About'>About</a>
   <a href='Home'>Home</a>
  
   <RouterProvider router={router} />
   
  
  

  
   
  
    </>
  )
}

export default App
