import ShortUrl from './components/ShortUrl'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AllUrls from './components/AllUrls'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/><Footer/></>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/create",
      element: <><Navbar/><ShortUrl/></>
    },
    {
      path: "/links",
      element: <><Navbar/><AllUrls/></>
    },
    {
      path: "/signup",
      element: <><Home/><SignUp/><Footer/></>
    },
    {
      path: "/login",
      element: <><Home/><Login/><Footer/></>
    },
    {
      path: "/about",
      element: <><Home/><About/><Footer/></>
      
    },{
      path: "/contact",
      element: <><Home/><Footer/></>
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
