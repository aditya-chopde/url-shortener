import React, { useContext, useState } from "react";
import hamburer from "../assets/hamburger.svg";
import profile from "../assets/profile.svg";
import link from "../assets/link.svg";
import anal from "../assets/analytics.svg";
import cross from "../assets/cross.svg";
import { NavLink, useNavigate } from "react-router-dom";
import logout from "../assets/logout.svg";
import { StoreContext } from "../context/StoreContext";
import logo from "../assets/logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { name, setToken, current, setCurrent} = useContext(StoreContext);
  const [toogle, setToogle] = useState(true)
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setToken("")
    toast.success("Logged Out Successfullly !", {
      position: "bottom-right",
      autoClose: 1000
    });
    navigate("/");
  };

  return (
    <>
      <nav className="mx-5 mt-5 lg:mx-0 lg:mt-0">
        <div className="relative flex justify-between lg:border-b-2">
          <div className="lg:hidden">
            <img
              src={hamburer}
              alt="Hamburger"
              className="w-6"
              onClick={() => setToogle(false)}
            />
          </div>
          <div>
            <img
              src={logo}
              alt="logo_min"
              className="w-12 lg:w-20 lg:mx-8 lg:mt-2"
            />
          </div>
          <div
            className={`lg:block lg:top-[85px] lg:w-[300px] lg:border-r-2 lg:px-5 lg:py-5 absolute w-full bg-white h-screen  ${
              toogle && "hidden"
            }`}
            id="sideBar"
          >
            <div>
              <img
                src={cross}
                alt="cross"
                className="w-8 my-3 lg:hidden"
                onClick={() => setToogle(true)}
              />
            </div>
            <ul className="space-y-5">
              <NavLink to="/create" onClick={() => {
                  setToogle(false)
                  setToogle(true)
              }}>
                <li className="my-3 lg:mx-3 lg:w-60 w-full py-2 bg-[#00ED64] rounded-sm text-white text-center text-lg 
                font-bold cursor-pointer lg:text-xl"
                onClick={()=>{
                  setCurrent("")
                }}
                >
                  Create New
                </li>
              </NavLink>
              <hr />
              <div className="px-5 space-y-8">
                <NavLink
                  to="/links"
                  className="text-md"
                  onClick={() => setToogle(true)}
                >
                  <li className={`flex flex-row w-full gap-5 my-3 py-2 px-3 lg:text-lg transition-all ${current=="links"?"lg:border-l-[5px] lg:border-[#399660] lg:bg-[#00ED64]":""}`}
                  onClick={()=>{
                    setCurrent("links")
                  }}
                  >
                    <img src={link} alt="Link" className="w-6" />
                    Links
                  </li>
                </NavLink>

                <NavLink to="/analytics" className="text-md">
                <li className={`flex flex-row w-full gap-5 my-3 py-2 px-3 lg:text-lg transition-all ${current=="analytics"?"lg:border-l-[5px] lg:border-[#318152] lg:bg-[#00ED64]":""}`}
                onClick={()=>{
                  setToogle(true)
                  setCurrent("analytics")
                }}
                >
                  <img src={anal} alt="analytics" className="w-6" />
                    Analytics
                </li>
                  </NavLink>
                <hr />
                <NavLink to="/" className="text-md">
                  <li className="flex flex-row w-full cursor-pointer gap-5 my-3 lg:text-lg" onClick={userLogOut}>
                    <img src={logout} alt="analytics" className="w-6" />
                    Logout
                  </li>
                </NavLink>
              </div>
            </ul>
          </div>
          <div className="lg:mx-8 lg:mt-3 flex gap-3 justify-center items-center cursor-pointer">
            <img src={profile} alt="profile_photo" className="w-6" />
            <p className="hidden lg:block font-bold text-sm">{name}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
