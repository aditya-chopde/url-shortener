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

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>,
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
      element: <><Home/><SignUp/></>
    },
    {
      path: "/login",
      element: <><Home/><Login/></>
    },
    {
      path: "/about",
      element: <><Home/><About/></>
      
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
