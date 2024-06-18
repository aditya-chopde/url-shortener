import { useForm } from "react-hook-form";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


const ShortUrl = () => {
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const url_backend = "http://localhost:3000/url";

  async function fetching_data(data) {
    const res = await fetch(url_backend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    navigate("/links")
  }

  return (
    <>
      <div>
        <div className="w-full">
          <form className="px-5 py-10" onSubmit={handleSubmit(fetching_data)}>
            <h1 className="text-3xl font-bold">Create New</h1>
            <div className="mt-12">
              <p className="my-2">Destination: </p>
              <input
                {...register("url", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                type="text"
                className="px-2 py-3 w-full border-2 outline-[#00ED64] rounded-sm"
                placeholder="Enter/Paste Link Here: "
              />
              {errors.url && (
                <div className="text-sm text-red-500">{errors.url.message}</div>
              )}
              <p className="my-2">Title: (Optional)</p>
              <input
                {...register("title")}
                type="text"
                className="px-2 py-3 w-full border-2 outline-[#00ED64] rounded-sm"
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
                      className="my-2 w-full py-2 bg-[#00ED64] rounded-sm text-white"
                      value="Create"
                    />
                <NavLink to="/links">
                  <button className="text-[#00ED64] py-2 w-full my-2 border-[1px] border-[#00ED64]">
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
