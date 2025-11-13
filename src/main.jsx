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
import CourseDetails from './components/pages/CourseDetails'
import AllCourse from './components/AllCourse'
import MyCourse from './components/pages/MyCourse'
import MyEnrolledCourses from './components/pages/MyEnrolledCourses'
import AddCourse from './components/pages/AddCourse'
import UpdateCourse from './components/pages/UpdateCourse'
import { Toaster } from 'react-hot-toast'



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
      },
      {
        path: '/allCourses',
        Component: AllCourse
      },
      {
        path:'/courseDetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/courses/${params.id}`),
        Component: CourseDetails
      },
      {
        path:'/myCourse',
        element: <MyCourse></MyCourse>
      },
      {
        path: '/myEnrolledCourse',
        element: <MyEnrolledCourses></MyEnrolledCourses>
      },
      {
        path: '/addCourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: '/updateCourse/:id',
        element: <UpdateCourse></UpdateCourse>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>,
)
