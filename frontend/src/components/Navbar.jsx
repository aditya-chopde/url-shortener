import React, { useContext, useState } from "react";
import hamburer from "../assets/hamburger.svg";
import profile from "../assets/profile.svg";
import link from "../assets/link.svg";
import anal from "../assets/analytics.svg";
import cross from "../assets/cross.svg";
import { NavLink, useNavigate } from "react-router-dom";
import logout from "../assets/logout.svg"

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate()

  const userLogOut = ( ) =>{
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    navigate("/")
  }

  return (
    <>
      <nav className="mx-5 mt-5">
        <div className="relative flex justify-between">
          <div>
            <img
              src={hamburer}
              alt="Hamburger"
              className="w-6"
              onClick={() => setToogle(true)}
            />
          </div>
          <div
            className={`absolute w-full bg-white h-screen  ${
              toogle ? "" : "hidden"
            }`}
            id="sideBar"
          >
            <div>
              <img
                src={cross}
                alt="cross"
                className="w-8 my-3"
                onClick={() => setToogle(false)}
              />
            </div>
            <ul className="">
              <NavLink to="/create" onClick={() => setToogle(false)}>
                <li className="my-3 w-full py-2 bg-[#00ED64] rounded-sm text-white text-center text-lg font-bold">
                  Create New
                </li>
              </NavLink>
              <hr />
              <div className="px-5">
                <li className="flex flex-row gap-5 my-3">
                  <img src={link} alt="Link" className="w-6" />
                  <NavLink
                    to="/links"
                    className="text-md"
                    onClick={() => setToogle(false)}
                  >
                    Links
                  </NavLink>
                </li>
                <li className="flex flex-row gap-5 my-3">
                  <img src={anal} alt="analytics" className="w-6" />
                  <a href="" className="text-md">
                    Analytics
                  </a>
                </li>
                <hr />
                <li className="flex flex-row gap-5 my-3" onClick={userLogOut}>
                  <img src={logout} alt="analytics" className="w-6" />
                  <a href="#" className="text-md">
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <img src={profile} alt="profile_photo" className="w-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
