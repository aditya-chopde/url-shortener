import { useForm } from "react-hook-form";
import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const ShortUrl = () => {
  const { url, userToken, userId } = useContext(StoreContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  async function createUrl(data) {
    if (localStorage.getItem("token")) {
      const res = await fetch(url + "url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      navigate("/links");
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <div className="bg-[#ffff]">
        <div className="lg:place-items-center lg:grid lg:w-full lg:min-h-screen">
          <form
            className="px-5 py-10 lg:w-[800px] lg:place-items-center"
            onSubmit={handleSubmit(createUrl)}
          >
            <h1 className="text-3xl font-bold lg:text-[50px]">Create New</h1>
            <div className="mt-12">
              <p className="my-2 lg:text-[25px]">Destination: </p>
              <input
                {...register("url", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                type="text"
                className="px-2 py-3 w-full lg:h-[55px] outline-[#00ED64] rounded-sm lg:px-5 lg:text-xl border-2"
                placeholder="Enter/Paste Link Here: "
              />
              {errors.url && (
                <div className="text-sm text-red-500">{errors.url.message}</div>
              )}
              <p className="my-2 lg:text-[25px]">Title: (Optional)</p>
              <input
                {...register("title")}
                type="text"
                className="px-2 py-3 lg:px-5 w-full border-2 outline-[#00ED64] rounded-sm lg:h-[55px] lg:text-xl"
                placeholder="Enter Title Here: "
              />
              <input
                {...register("userId")}
                className="hidden"
                type="text"
                value={userId}
              />
              <div className="my-2">
                <input
                  disabled={isSubmitting}
                  type="submit"
                  className="my-2 w-full cursor-pointer py-2 bg-[#00ED64] rounded-sm text-white lg:text-xl"
                  value="Create"
                />
                <NavLink to="/links">
                  <button className="text-[#00ED64] py-2 w-full my-2 border-[1px] border-[#00ED64] bg-white lg:text-xl">
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShortUrl;
