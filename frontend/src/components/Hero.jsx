import React from "react";
import heroImage from "../assets/hero_image.png";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/digiFlow.svg";
import img2 from "../assets/lineflow.svg";
import img3 from "../assets/landing flow.svg";
import img4 from "../assets/read_flow.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <article className="lg:mx-32 mx-10">
        <div className="flex flex-row justify-between">
          <div className="lg:mt-20 lg:w-[500px]">
            <h1 className="lg:text-[65px] lg:leading-none text-4xl my-5 font-bold">
              Make Your <br />{" "}
              <span className="text-[#00ED64]">Digital Presence</span>
            </h1>
            <p className="lg:text-xl">
              Use our URL Shortener to engage with your audience and connect
              them with the right information. Build, edit and track everything
              inside the Vitly
            </p>
            <div className="mt-8 bg-[#00ED64] w-32 text-center py-2 rounded-md text-white font-bold">
              <button onClick={() => navigate("/signup")}>Get Started</button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={heroImage} alt="hero_image" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center lg:gap-3 mt-10 gap-10">
          <img src={img1} alt="image1" className="w-28" />
          <img src={img2} alt="image2" className="w-28" />
          <img src={img3} alt="image3" className="w-28" />
          <img src={img4} alt="image4" className="w-28" />
        </div>
      </article>
    </>
  );
};

export default Hero;
