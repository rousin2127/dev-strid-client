import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './components/Home'
import { AuthContext } from './components/context/AuthContext'
import Signup from './components/features/Signup'
import Login from './components/features/Login'
import ForgotPass from './components/features/Forgetpass'
import AuthProvider from './components/context/AuthProvider'



const router = createBrowserRouter([
  {
    path:"/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/forget-password',
        element: <ForgotPass></ForgotPass>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
