import React from "react";
import {useNavigate} from  "react-router-dom"
import profile from "../assets/profile.svg";

const Testimonails = () => {

    const navigate = useNavigate()

  return (
    <>
      <article>
        <div className="flex flex-col justify-center items-center my-10">
          <h1 className="lg:text-[30px] lg:leading-none text-xl lg:text-4xl my-5 font-bold">
            Our Happy Customers
          </h1>

          <div className="border-[1px] border-black rounded-lg py-5 px-8 my-10 lg:w-[500px] w-80">
            <div className="flex flex-row gap-3">
              <img src={profile} alt="profile_picture" className="w-8" />
              <h2 className="font-bold lg:text-xl text-lg">John Doe</h2>
            </div>
            <div className="my-3">
                <p className="font-bold lg:text-lg text-md">One of the best tool I have ever used since 
                years of experience </p>
            </div>
          </div>
        </div>
      </article>

      <article>
      <div className="bg-[#D9D9D9] flex flex-col justify-center items-center my-10">
        <h1 className="lg:text-[30px]lg:leading-none text-xl lg:text-4xl mt-10 font-bold">
            More than a link Shortener
          </h1>
          <div className="mt-8 px-10 my-5 bg-[#00ED64] cursor-pointer text-center py-2 rounded-md text-white font-bold">
              <button onClick={() => navigate("/signup")}>Get Started</button>
            </div>
        </div>
      </article>
    </>
  );
};

export default Testimonails;
