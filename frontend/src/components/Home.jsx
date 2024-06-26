import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import hamburer from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [toogle, setToogle] = useState(false);
  const [current, setCurrent] = useState("home")

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
      <nav className="mx-10">
        <div className="flex lg:flex-row justify-between relative">
          {/* Logo  */}
          <div>
            <img
              src={logo}
              alt="main_logo"
              className="lg:w-28 w-20 cursor-pointer lg:mx-10"
              onClick={() => navigate("/")}
            />
          </div>

          {/* NavLinks  */}
          <div
            className={`lg:mt-0 lg:left-[1000px] w-full lg:w-[450px] lg:h-10 h-screen absolute bg-white flex justify-between ${
              toogle ? "hidden" : ""
            } lg:block`}
          >
            <ul className="lg:flex lg:flex-row lg:gap-5 lg:items-center space-y-6">
              <li></li>
              <li
                className={`cursor-pointer transition-all ${current=="home"?"lg:border-b-[2px] lg:border-black":""}`}
                onClick={() => {
                  navigate("/");
                  setToogle(true);
                  setCurrent("home")
                }}
              >
                Home
              </li>
              <li
                className={`cursor-pointer transition-all ${current=="about"?"lg:border-b-[2px] lg:border-black":""}`}
                onClick={() => {
                  navigate("/about");
                  setToogle(true);
                  setCurrent("about")
                }}
              >
                About
              </li>
              <li
                className={`cursor-pointer transition-all ${current=="contact"?"lg:border-b-[2px] lg:border-black":""}`}
                onClick={() => {
                  navigate("/contact");
                  setToogle(true);
                  setCurrent("contact")
                }}
              >
                Contact Us{" "}
              </li>
              <div className="lg:flex lg:flex-row lg:gap-5 space-y-6">
                <li>
                  <button
                    className="bg-[#e2e5e3] py-1 px-5 rounded-md lg:mt-6"
                    onClick={() => {
                      navigate("/login");
                      setToogle(true);
                      setCurrent("")
                    }}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="bg-[#00ED64] py-1 px-5 lg:mb-6 rounded-md text-white"
                    onClick={() => {
                      navigate("/signup");
                      setCurrent("")
                      setToogle(true);
                    }}
                  >
                    SignUp
                  </button>
                </li>
              </div>
            </ul>

            {/* Cross  */}
            <div className="mt-5">
              <img
                src={cross}
                alt="cross"
                className="w-6 lg:hidden"
                onClick={() => setToogle(true)}
              />
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <img
              src={hamburer}
              alt="hamburger"
              className="w-6 mt-8"
              onClick={() => setToogle(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
