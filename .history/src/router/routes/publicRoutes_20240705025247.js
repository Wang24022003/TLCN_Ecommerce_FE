import { lazy } from "react"
const Login = lazy(()=> import('./login'))
const Register = lazy(()=> import('./register'))

const publicRoutes = [
     { 
          path:'/login',
          element : <Login/>
     },
     { 
          path:'/register',
          element : <Register/>
     }
]

export default publicRoutes