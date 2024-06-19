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

const Navbar = () => {
  const { toogle, setToogle, name } = useContext(StoreContext);
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
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
              onClick={() => setToogle(true)}
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
            className={`lg:block lg:top-[85px] lg:w-[350px] lg:border-r-2 lg:px-5 lg:py-5 absolute w-full bg-white h-screen  ${
              toogle ? "" : "hidden"
            }`}
            id="sideBar"
          >
            <div>
              <img
                src={cross}
                alt="cross"
                className="w-8 my-3 lg:hidden"
                onClick={() => setToogle(false)}
              />
            </div>
            <ul className="space-y-5">
              <NavLink to="/create" onClick={() => setToogle(false)}>
                <li className="my-3 lg:mx-3 lg:w-72 w-full py-2 bg-[#00ED64] rounded-sm text-white text-center text-lg font-bold cursor-pointer lg:text-xl">
                  Create New
                </li>
              </NavLink>
              <hr />
              <div className="px-5 space-y-8">
                <NavLink
                  to="/links"
                  className="text-md"
                  onClick={() => setToogle(false)}
                >
                  <li className="flex flex-row w-full gap-5 my-3 lg:text-xl">
                    <img src={link} alt="Link" className="w-6" />
                    Links
                  </li>
                </NavLink>
                <li className="flex flex-row gap-5 my-3 lg:text-xl">
                  <img src={anal} alt="analytics" className="w-6" />
                  <a href="" className="text-md">
                    Analytics
                  </a>
                </li>
                <hr />
                <NavLink to="/" className="text-md">
                  <li className="flex flex-row w-full cursor-pointer gap-5 my-3 lg:text-xl" onClick={userLogOut}>
                    <img src={logout} alt="analytics" className="w-6" />
                    Logout
                  </li>
                </NavLink>
              </div>
            </ul>
          </div>
          <div className="lg:mx-12 lg:mt-5 flex gap-3 justify-center items-center cursor-pointer">
            <img src={profile} alt="profile_photo" className="w-8" />
            <p className="hidden lg:block font-bold">{name}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
