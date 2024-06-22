import React, { StrictMode, useContext, useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import deleteSvg from "../assets/delete.svg";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Analytics = () => {
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
          <h1 className="font-bold text-3xl mx-5 my-8 lg:text-4xl">
            Analytics
          </h1>
          {urls.length == 0 ? (
            <>
              <p className="mx-6">No Urls Generated</p>
            </>
          ) : (
            <>
              {urls.map((url) => (
                <div
                  key={url._id}
                  className="border-[1px] border-black shadow-md mx-6 p-5 rounded-md my-3 space-y-3"
                >
                  <h3 className="text-xl font-bold lg:text-2xl">{url.title}</h3>
                  <a
                    href={`http://localhost:3000/${url.shortId}`}
                    className="text-blue-600 text-lg hover:underline"
                    id="shortUrl"
                  >{`http://localhost:3000/${url.shortId}`}</a>{" "}
                  <br />
                  <a href={url.redirectURL} className="hover:underline">
                    {url.redirectURL}
                  </a>
                  <p className="text-[12px]">Time: {url.createdAt}</p>
                  <p className="text-md">Clicks: {url.visitHistory.length}</p>
                  
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Analytics;
