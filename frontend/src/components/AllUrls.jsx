import React, { useContext, useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import deleteSvg from "../assets/delete.svg";
import { StoreContext } from "../context/StoreContext";

const AllUrls = () => {
  const shortUrl = document.getElementById("shortUrl");
  function copyUrl() {
    navigator.clipboard.writeText(shortUrl.innerHTML);
  }

  const {urls, setUrls} = useContext(StoreContext)

  return (
    <>
      <div className="bg-[#f4f6fa] w-full h-screen">
        <h1 className="font-bold text-3xl my-8 mx-5">Your Links</h1>
        {urls.map((url) => (
          <div
            key={url._id}
            className="bg-white mx-5 p-3 rounded-md my-3 space-y-3"
          >
            <h3 className="text-xl font-bold">{url.title}</h3>
            <a
              href={`http://localhost:3000/url/${url.shortId}`}
              className="text-blue-600 text-lg hover:underline"
              id="shortUrl"
            >{`http://localhost:3000/url/${url.shortId}`}</a>{" "}
            <br />
            <a href={url.redirectURL} className="hover:underline">
              {url.redirectURL}
            </a>
            <p className="text-[12px] opacity-50">{url.createdAt}</p>
            <div className="my-3 flex flex-row gap-3">
              <button
                className="text-black px-3 rounded-sm py-1 border-[1px] border-black flex gap-2 justify-center items-center hover:bg-[#f4f6fa]"
                onClick={copyUrl}
              >
                <img src={copy} alt="copy_svg" className="w-5" />
                Copy
              </button>
              <button className="text-black px-3 rounded-sm py-1 border-[1px] border-black flex gap-2 justify-center items-center hover:bg-[#f4f6fa]">
                <img src={edit} alt="copy_svg" className="w-5" />
                Edit
              </button>

              <form  method="post" action={`http://localhost:3000/url/delete/${url._id}`}>
                <button className="text-black px-3 rounded-sm py-1 border-[1px] border-black flex gap-2 justify-center items-center hover:bg-[#f4f6fa]">
                  <img src={deleteSvg} alt="copy_svg" className="w-5" />
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUrls;
