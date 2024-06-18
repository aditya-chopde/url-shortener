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
      element: <><SignUp/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
