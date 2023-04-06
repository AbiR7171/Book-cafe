import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import Books from './Books';
import About from './About';
import BookDeatiels from './BookDeatiels';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main/>,
    children:[
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'books',
      element: <Books></Books>,
      loader: ()=> fetch('https://api.itbook.store/1.0/search/mongodb')
    },
    {
      path:'/bookDeatiels/:id',
      element: <BookDeatiels/>,
      loader: ({params})=> fetch(`https://api.itbook.store/1.0/search/mongodb/${params.id}`)
    },
    {
      path:'/about',
      element: <About/>
    },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
