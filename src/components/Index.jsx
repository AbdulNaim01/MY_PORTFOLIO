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
    {path:'/MY_PORTFOLIO/',element:<><Navbar /><Home /></>},
    {path:'/MY_PORTFOLIO/skills',element:<><Navbar /><Skills /></>},
    {path:'/MY_PORTFOLIO/projects',element:<><Navbar /><Projects /></>},
    {path:'/MY_PORTFOLIO/contact',element:<><Navbar /><Contact /></>},
  ]);


  return (
    <>
      <RouterProvider router={router}  />
    </>
  );
}

export default Index;
