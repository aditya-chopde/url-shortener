import React from "react";
import logo_min from "../assets/logo-min.png";
import gitHub from "../assets/github.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="mx-24 mt-10">
        <hr />
        <div className="mx-20 flex flex-row justify-between">
          <div className="flex flex-row">
            <div>
              <img src={logo_min} alt="logo_footer" className="w-52" />
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="font-bold">
                &copy; Created and Developed with ❤️ by{" "}
                <span className="hover:text-blue-400 hover:underline">
                  <a href="https://www.linkedin.com/in/aditya-chopde-486a102a2/">
                    Aditya Chopde
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mx-28">
            <div>
              <a href="https://github.com/aditya-chopde">
                <img src={gitHub} alt="github_logo" className="w-6" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/adityachopde_here/">
                <img src={insta} alt="instagram-logo" className="w-6" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/aditya-chopde-486a102a2/">
                <img src={linkedin} alt="linkedin_logo" className="w-8" />
              </a>
            </div>
            <div>
              <a href="https://x.com/?lang=en">
                <img src={twitter} alt="twitter_logo" className="w-6" />
              </a>
            </div>
            {/* <img src={insta} alt="instagram_logo" className="w-6" />
            <img src={linkedin} alt="linkedin_logo" className="w-7" />
            <img src={twitter} alt="twitter_logo" className="w-6" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
