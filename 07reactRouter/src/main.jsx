import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoAPI } from './components/Github/Github.jsx'


//creating router from reacr-router-dom.......
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout /> ,

//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       },
//     ]
//   }
// ]);

//creating router from reacr-router-dom second method.........
const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>}  />
      <Route path='about' element={<About/>}  />
      <Route path='contact' element={<Contact/>}  />
      <Route path='user/:userId' element={<User/>}  />
      <Route 
        path='github' 
        element={<Github />} 
        // loader call function from Github
        loader={githubInfoAPI} 

        //loader accept CB function where we can perform fetch data from API OP Database..
        // loader={async({data})=>{
           // return data =  await fetch('https://api.github.com/users/AnuragGupta1998');
           // }
        //}

      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
