import React from "react";
import url from "../assets/url.png";
import tick from "../assets/tick.png";
import {useNavigate} from  "react-router-dom"

const Services = () => {
  const navigate = useNavigate()
  return (
    <>
      <article className="bg-[#D9D9D9] mt-10">
        <div className="flex flex-col justify-center items-center mx-5">
          <h1 className="lg:text-[30px] lg:leading-none text-xl mt-10 mb-3 font-bold">
            The Vitly Connections Platform
          </h1>
          <p className="lg:text-xl text-lg text-justify">
            All the products you need to build brand connections, manage links
            and QR Codes, in a single unified platform.
          </p>
          <div className="w-[350px] lg:w-96 bg-white p-8 rounded-lg my-10">
            <div className="flex flex-row gap-3 justify-center items-center my-2">
              <img src={url} alt="url_short" className="w-8" />
              <h2 className="text-2xl font-bold">Url Shortener</h2>
            </div>
            <p className="text-justify">
              A comprehensive solution to help make every point of connection
              between your content and your audience more powerful.
            </p>
            <div>
              <h3 className="my-3 font-bold">
                Popular Link Management Features
              </h3>
              <div className="flex flex-row gap-3">
                <img src={tick} alt="tick_svg" />
                <p>URL shortening at scale</p>
              </div>
              <div className="flex flex-row gap-3">
                <img src={tick} alt="tick_svg" />
                <p>Custom links with your brands</p>
              </div>
              <div className="flex flex-row gap-3">
                <img src={tick} alt="tick_svg" />
                <p>URL Redirects</p>
              </div>
              <div className="flex flex-row gap-3">
                <img src={tick} alt="tick_svg" />
                <p>Advanced Analytics and Tracking</p>
              </div>
            </div>
            <div className="mt-8 w-full bg-[#00ED64] cursor-pointer text-center py-2 rounded-md text-white font-bold">
              <button onClick={() => navigate("/signup")}>Get Started</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Services;
