import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { StoreContext } from "../context/StoreContext";
import hamburer from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [toogle, setToogle] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/links");
    } else {
      navigate("/");
    }
    setToogle(true);
  }, []);

  return (
    <>
      <nav className="mx-5">
        <div className="flex lg:flex-row justify-between relative">

          {/* Logo  */}
          <div>
            <img src={logo} alt="main_logo" className="lg:w-28 w-20 cursor-pointer lg:mx-10" onClick={()=> navigate("/")}/>
          </div>

          {/* NavLinks  */}
          <div className={`lg:mt-0 lg:left-[1000px] w-full lg:w-[450px] lg:h-10 h-screen absolute bg-white flex justify-between ${toogle?"hidden":""} lg:block`}>
            <ul className="lg:flex lg:flex-row lg:gap-5 lg:items-center space-y-6">
              <li></li>
              <li className="cursor-pointer" onClick={()=> {
                    navigate("/")
                    setToogle(true)
                  }}>Home</li>
              <li className="cursor-pointer"  onClick={()=> {
                    navigate("/about")
                    setToogle(true)
                  }}>About</li>
              <li className="cursor-pointer" onClick={()=> {
                    navigate("/contact")
                    setToogle(true)
                  }}>Contact Us </li>
              <div className="lg:flex lg:flex-row lg:gap-5 space-y-6">
                <li>
                  <button className="bg-[#e2e5e3] py-1 px-5 rounded-md lg:mt-6" onClick={()=> {
                    navigate("/login")
                    setToogle(true)
                  }}>
                    Login
                  </button>
                </li>
                <li>
                  <button className="bg-[#00ED64] py-1 px-5 lg:mb-6 rounded-md text-white"  onClick={()=> {
                    navigate("/signup")
                    setToogle(true)
                  }}>
                    SignUp
                  </button>
                </li>
              </div>
            </ul>
            
          {/* Cross  */}
          <div className="mt-5">
            <img src={cross} alt="cross" className="w-6 lg:hidden" onClick={()=> setToogle(true)}/>
          </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <img src={hamburer} alt="hamburger" className="w-6 mt-8" onClick={(()=> setToogle(false))}/>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Home;
