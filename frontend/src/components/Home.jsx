import React, { useContext, useEffect } from "react";
import logoMin from "../assets/logo-min.png";
import { StoreContext } from "../context/StoreContext";
import hamburer from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const { toogle, setToogle } = useContext(StoreContext);
    const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("token")){
        navigate("/links")
      }else{
        navigate("/")
      }
      setToogle(false)
  }, [])
  
  return (
    <>
      <nav className="m-5 flex flex-row justify-between relative">
        <div>
          <img src={logoMin} alt="Logo_min" className="w-16 flex cursor-pointer" />
        </div>
        <div
          className={`absolute h-screen bg-white w-full flex flex-row justify-between ${
            toogle ? "" : "hidden"
          }`}
        >
          <ul className="space-y-10 text-xl">
            <li></li>
            <li>
              <NavLink to="/" onClick={() => setToogle(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setToogle(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setToogle(false)}>
                Contact Us
              </NavLink>
            </li>
            <div className="flex flex-row gap-3">
              <li className="my-2 w-24 text-center p-2 bg-[#D9D9D9] rounded-s">
                <NavLink to="/login" onClick={() => setToogle(false)}>
                  Login
                </NavLink>
              </li>
              <li className="my-2 text-white w-24 text-center p-2 bg-[#00ED64] rounded-sm">
                <NavLink to="/signup" onClick={() => setToogle(false)}>
                  Sign Up
                </NavLink>
              </li>
            </div>
          </ul>
          <div>
            <img
              src={cross}
              alt="cross"
              className="w-8 my-3 cursor-pointer"
              onClick={() => setToogle(false)}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={hamburer}
              alt="Hamburger"
              className="w-6 mx-3 cursor-pointer"
              onClick={() => setToogle(true)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
