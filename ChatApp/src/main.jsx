import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import Signup from './signup.jsx'
import Home from './home.jsx'
import Chat from './chat.jsx'
import Contects from './contects.jsx'
import Search_Contects from './search_contect.jsx'
import Profile from './profile.jsx'
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
    },
    {
      path:"/Home",
      element:<Home />
    },
    {
      path:"/Chat",
      element:<Chat />
    },
    {
      path:"/Contects",
      element: <Contects />
    },
    {
      path:"/Search Contects",
      element: <Search_Contects />
    },
    {
      path:"/Profile",
      element: <Profile />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
