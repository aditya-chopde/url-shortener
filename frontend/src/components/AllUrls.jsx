import React, { StrictMode, useContext, useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import deleteSvg from "../assets/delete.svg";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const AllUrls = () => {
  const { urls, setUrls, url, userToken, userId } = useContext(StoreContext);
  const navigate = useNavigate();
  function copyUrl() {
    const shortUrl = document.getElementById("shortUrl");
    navigator.clipboard.writeText(shortUrl.innerHTML);
  }

  const fetchUrls = async () => {
    const res = await fetch(url + "user/" + userId);
    const result = await res.json();
    const urlArray = result.allUrls;
    urlArray.reverse();
    setUrls(urlArray);
  };

  const deleteUrl = async (id, data) => {
    axios.post(url + "url/delete/" + id).then(() => {
      let newUrls = urls.filter((url) => url._id !== id);
      setUrls(newUrls);
    });
  };

  useEffect(() => {
    if (userToken) {
      async function loadData() {
        fetchUrls();
      }
      loadData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="bg-[#ffff] w-full lg:min-h-screen lg:grid lg:place-items-center">
        <div className="h-screen my-10 lg:w-[800px]">
          <h1 className="font-bold text-3xl mx-5 my-8 lg:text-[50px]">
            Your Links
          </h1>
          {urls.map((url) => (
            <div
              key={url._id}
              className="border-[1px] border-black shadow-md mx-6 p-5 rounded-md my-3 space-y-3"
            >
              <h3 className="text-xl font-bold lg:text-[25px]">{url.title}</h3>
              <a
                href={`http://localhost:3000/${url.shortId}`}
                className="text-blue-600 text-lg hover:underline"
                id="shortUrl"
              >{`http://localhost:3000/${url.shortId}`}</a>{" "}
              <br />
              <a href={url.redirectURL} className="hover:underline">
                {url.redirectURL}
              </a>
              <p className="text-[12px]">{url.createdAt}</p>
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

                <button
                  className="text-black px-3 rounded-sm py-1 border-[1px] border-black flex gap-2 justify-center items-center hover:bg-[#f4f6fa]"
                  onClick={() => [deleteUrl(url._id)]}
                >
                  <img src={deleteSvg} alt="copy_svg" className="w-5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUrls;
