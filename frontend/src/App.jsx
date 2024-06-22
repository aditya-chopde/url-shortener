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
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import Analytics from './components/Analytics'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/><Hero/><Services/><Testimonails/><Footer/></>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/create",
      element: <><Navbar/><ShortUrl/></>
    },
    {
      path: "/analytics",
      element: <><Navbar/><Analytics/></>
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
      element: <><Home/><Contact/><Footer/></>
    }
  ]);

  return (
    <>
      <ToastContainer />
     <RouterProvider router={router} />
    </>
  )
}

export default App
