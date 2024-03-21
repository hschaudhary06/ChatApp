import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import Signup from './signup.jsx'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const routers = createBrowserRouter([{
  path:"/",
  element: <Layout />,
  children:[
    {
      path:"/",
      element:<App />
    },
    {
      path:"/Login",
      element:<Login />
    },
    {
      path:"/Signup",
      element:<Signup />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
