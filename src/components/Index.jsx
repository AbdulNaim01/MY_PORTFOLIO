import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'





function Index() {
  // Set up the router with routes for each page
  const router = createBrowserRouter([
    {path:'/',element:<><Navbar /><Home /></>},
    {path:'/skills',element:<><Navbar /><Skills /></>},
    {path:'/projects',element:<><Navbar /><Projects /></>},
    {path:'/contact',element:<><Navbar /><Contact /></>},
  ]);


  return (
    <>
      <RouterProvider router={router}  />
    </>
  );
}

export default Index;
